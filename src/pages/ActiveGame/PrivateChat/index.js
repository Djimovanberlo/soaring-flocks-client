import React, { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import { GET_PRIVATE_MESSAGES_BY_ID } from "../../../graphql/queries";

export default function PrivateChat() {
  // This entire component is for additional feature: private chat and is not yet used in current version
  // This component can be restructured similarly to PublicChat, with index, inputbox, messagebox

  const [newMessage, set_newMessage] = useState({
    player: "playerName",
    content: "",
  });

  const { data, error, loading } = useQuery(GET_PRIVATE_MESSAGES_BY_ID);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;

  const handleChange = (event) => {
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  const handleOnKeyPress = (target) => {
    if (target.charCode === 13) {
      console.log("PRESSED ENTER");
    }
  };

  return (
    <Card>
      <Card.Header>Chat with otherPlayer</Card.Header>
      <Card.Body>
        {/* {messages
          .slice(0)
          .reverse()
          .map((message, index) => {
            return (
              <div key={index}>
                {message.player}: {message.content}
              </div>
            );
          })} */}
      </Card.Body>
      <Form>
        <Form.Control
          type="text"
          as="textarea"
          rows="2"
          value={newMessage.content}
          onChange={handleChange}
          onKeyPress={handleOnKeyPress}
        />
      </Form>
    </Card>
  );
}
