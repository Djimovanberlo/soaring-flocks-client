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
import InputBox from "./InputBox";
import MessageBox from "./MessageBox";

export default function PublicChat(props) {
  // const [inputField, set_inputField] = useState("hoi");
  const { data, error, loading } = useQuery(GET_ALL_PUBLIC_MESSAGES, {
    variables: {
      gameId: 1,
    },
  });
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("DATAQUERY", data);

  return (
    <div style={{ width: "450px" }}>
      <Card>
        <Card.Header>Game Title Chat</Card.Header>
        <MessageBox allMessages={data.getAllPublicMessages} />
        <InputBox />
      </Card>
      {/* <Button variant="info" size="sm" onClick={console.log("DATA", data)}>
        TEST
      </Button> */}
    </div>
  );
}

// tyle="overflow:scroll; height:400px
