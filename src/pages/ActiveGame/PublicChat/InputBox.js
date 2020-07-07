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
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayerName,
  selectPlayerId,
} from "../../../store/player/selectors";

export default function InputBox(props) {
  const [msgLengthError, set_msgLengthError] = useState("");
  //   console.log("WWWWWWWWWWW", props);

  //   console.log("PROPSDATA", allQueriedMessages);

  const playerName = useSelector(selectPlayerName);
  const playerId = useSelector(selectPlayerId);

  const [newMessage, set_newMessage] = useState({
    player: playerName,
    content: "",
  });

  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);

  const handleOnKeyPress = (target, event) => {
    if (target.charCode === 13) {
      if (newMessage.content.length < 250) {
        console.log("JA", newMessage.content.length);
        //   console.log("ENTER CLICKwwwwED", newMessage.content);
        createPublicMessage({
          variables: { playerId: playerId, content: newMessage.content },
        });
        set_newMessage({ player: playerName, content: "" });
        // set_inputField("");
      } else {
        console.log("NEE", newMessage.content.length);
        set_msgLengthError("Chat messages must be 250 or less characters.");
        set_newMessage({ player: playerName, content: "" });
      }
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  return (
    <>
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
      <br></br>
      {msgLengthError}
    </>
  );
}
