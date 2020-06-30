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

export default function InputBox(props) {
  //   console.log("WWWWWWWWWWW", props);

  //   console.log("PROPSDATA", allQueriedMessages);

  const [newMessage, set_newMessage] = useState({
    player: "Djimo",
    content: "",
  });

  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);

  const handleOnKeyPress = (target, event) => {
    if (target.charCode === 13) {
      //   console.log("ENTER CLICKwwwwED", newMessage.content);
      createPublicMessage({
        variables: { playerId: 1, content: newMessage.content },
      });
      set_newMessage({ player: "Djimo", content: "" });
      // set_inputField("");
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  return (
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
  );
}
