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
  const messages = [
    {
      player: "Djimo",
      content: "Hi anyone wanna trade?",
    },
    { player: "Jan", content: "Nah I'm good son" },
    { player: "Jochem", content: "Ye sure m9" },
  ];

  return (
    <>
      <Container>
        {messages
          .slice(0)
          .reverse()
          .map((message) => {
            return (
              <Card>
                {message.player}: {message.content}
              </Card>
            );
          })}
      </Container>
    </>
  );
}
