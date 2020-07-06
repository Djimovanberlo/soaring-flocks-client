import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CREATE_PUBLIC_MESSAGE } from "../../../graphql/mutations";
import { GET_ALL_PUBLIC_MESSAGES } from "../../../graphql/queries";
import { SUB_ALL_PUBLIC_MESSAGES } from "../../../graphql/subscriptions";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";

export default function MessageBox(props) {
  const [allQueriedMessages, set_allQueriedMessages] = useState(
    props.allPublicMessages
  );
  //   console.log("WWWWWW", allQueriedMessages);

  const { data, error, loading } = useSubscription(SUB_ALL_PUBLIC_MESSAGES, {
    variables: {
      gameId: 1,
    },
  });
  //   console.log("ZZZZZZ", data);

  useEffect(() => {
    if (loading === false && data) {
      set_allQueriedMessages([...allQueriedMessages, data.messageAdded]);
      //   allQueriedMessages.push(data.messageAdded);
    }
  }, [loading, data]);

  //   console.log("AAAAAAA", allQueriedMessages);
  // const { data, error, loading } = useQuery(GET_ALL_PUBLIC_MESSAGES);
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
        {/* {data.messageAdded.playerId.name}: {data.messageAdded.content} */}
      </Card.Body>
    );
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  //   console.log("DATASUBSCRIPTION", data);

  return (
    <Card.Body style={{ overflowY: "scroll", height: "600px" }}>
      {allQueriedMessages.map((msg, index) => {
        return (
          <div key={index}>
            {msg.playerId.name}: {msg.content}
          </div>
        );
      })}
      {/* {data.messageAdded.playerId.name}: {data.messageAdded.content} */}
    </Card.Body>
  );
}
