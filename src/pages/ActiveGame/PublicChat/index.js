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

import Trade from "../TradePanel/SentTrade";
import { SubscriptionClient } from "subscriptions-transport-ws";

export default function PublicChat(props) {
  const [inputField, set_inputField] = useState("hoi");
  const [newMessage, set_newMessage] = useState({
    player: "Djimo",
    content: "",
  });

  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);

  const handleOnKeyPress = (target, event) => {
    if (target.charCode === 13) {
      console.log("ENTER CLICKwwwwED", newMessage.content);
      createPublicMessage({
        variables: { playerId: 1, content: newMessage.content },
      });
      set_newMessage({ player: "Djimo", content: "" });
      set_inputField("");
    }
  };

  const { data, error, loading } = useSubscription(SUB_ALL_PUBLIC_MESSAGES);
  // const { data, error, loading } = useQuery(GET_ALL_PUBLIC_MESSAGES);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  console.log("DATAMSG", data);

  const handleChange = (event) => {
    console.log(event.target.value);
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  return (
    <div style={{ width: "450px" }}>
      <Card>
        <Card.Header>Game Title Chat</Card.Header>
        <Card.Body style={{ overflowY: "scroll", height: "600px" }}>
          {/* {data.messageAdded.map((msg, index) => {
            return (
              <div key={index}>
                {msg.playerId.name}: {msg.content}
              </div>
            );
          })} */}
          {data.messageAdded.playerId.name}: {data.messageAdded.content}
        </Card.Body>
        <Form>
          <Form.Control
            type="text"
            as="textarea"
            rows="3"
            value={newMessage.content}
            onChange={handleChange}
            onKeyPress={handleOnKeyPress}
          />
        </Form>
      </Card>
      {/* <Button variant="info" size="sm" onClick={console.log("DATA", data)}>
        TEST
      </Button> */}
    </div>
  );
}

// tyle="overflow:scroll; height:400px
