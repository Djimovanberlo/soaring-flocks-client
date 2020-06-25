import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CREATE_PUBLIC_MESSAGE } from "../../graphql/mutations";
import { GET_ALL_PUBLIC_MESSAGES } from "../../graphql/queries";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

import Trade from "./SentTrade";

export default function PublicChat(props) {
  const [inputField, set_inputField] = useState("hoi");
  const [newMessage, set_newMessage] = useState({
    player: "Djimo",
    content: "",
  });

  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);

  const handleOnKeyPress = (target, event) => {
    if (target.charCode === 13) {
      // event.preventDefault();

      console.log("ENTER CLICKwwwwED", newMessage.content);
      createPublicMessage({
        variables: { playerId: 1, content: newMessage.content },
      });
      // addPublicMessage({ variables: { content: target.value } });
      // set_messages([...messages, newMessage]);
      set_newMessage({ player: "Djimo", content: "" });
      set_inputField("");
    }
  };

  const { data, error, loading } = useQuery(GET_ALL_PUBLIC_MESSAGES);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  // console.log("DATAMSG", data.getAllPublicMessages);

  const handleChange = (event) => {
    console.log(event.target.value);
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  return (
    <Card>
      <Card.Header>Game Title Chat</Card.Header>
      <Card.Body>
        {data.getAllPublicMessages.map((msg, index) => {
          return (
            <div key={index}>
              {msg.playerId.name}: {msg.content}
            </div>
          );
        })}
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
