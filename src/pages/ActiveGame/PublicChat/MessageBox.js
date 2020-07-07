import React, { useState, useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import { useSubscription } from "@apollo/react-hooks";

import { SUB_ALL_PUBLIC_MESSAGES } from "../../../graphql/subscriptions";

export default function MessageBox(props) {
  const [allQueriedMessages, set_allQueriedMessages] = useState(
    props.allPublicMessages
  );
  const { data, error, loading } = useSubscription(SUB_ALL_PUBLIC_MESSAGES, {
    variables: {
      gameId: 1,
    },
  });
  useEffect(() => {
    if (loading === false && data) {
      set_allQueriedMessages([...allQueriedMessages, data.messageAdded]);
    }
  }, [loading, data]);

  if (loading)
    return (
      <Card.Body style={{ overflowY: "scroll", height: "600px" }}>
        {allQueriedMessages.map((msg, index) => {
          return (
            <div key={index}>
              {msg.playerId.name}: {msg.content}
            </div>
          );
        })}
      </Card.Body>
    );
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;

  return (
    <Card.Body style={{ overflowY: "scroll", height: "600px" }}>
      {allQueriedMessages.map((msg, index) => {
        return (
          <div key={index}>
            {msg.playerId.name}: {msg.content}
          </div>
        );
      })}
    </Card.Body>
  );
}
