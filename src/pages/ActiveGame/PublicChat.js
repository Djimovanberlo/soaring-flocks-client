import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

import Trade from "./Trade";

export default function PublicChat(props) {
  const [inputField, set_inputField] = useState("hoi");
  const [newMessage, set_newMessage] = useState({
    player: "Djimo",
    content: "",
  });
  const [messages, set_messages] = useState([
    {
      player: "Djimo",
      content: "Hi anyone wanna trade?",
    },
    { player: "Jan", content: "Nah I'm good son" },
    { player: "Jochem", content: "Ye sure m9" },
  ]);

  const handleChange = (event) => {
    console.log(event.target.value);
    set_newMessage({ ...newMessage, content: event.target.value });
  };

  const handleOnKeyPress = (target, event) => {
    if (target.charCode === 13) {
      console.log("ENTER CLICKED", newMessage);
      set_messages([...messages, newMessage]);
      set_newMessage({ player: "Djimo", content: "" });
      set_inputField("");
    }
  };

  return (
    <>
      <Container>
        {messages
          .slice(0)
          .reverse()
          .map((message, index) => {
            return (
              <Card key={index}>
                {message.player}: {message.content}
              </Card>
            );
          })}
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
      </Container>
    </>
  );
}
