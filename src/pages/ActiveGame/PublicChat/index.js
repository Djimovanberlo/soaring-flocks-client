import React from "react";
import { Alert, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

import { GET_ALL_PUBLIC_MESSAGES } from "../../../graphql/queries";
import { selectGameTitle } from "../../../store/game/selectors";
import InputBox from "./InputBox";
import MessageBox from "./MessageBox";

export default function PublicChat() {
  const gameTitle = useSelector(selectGameTitle);

  const { data, error, loading } = useQuery(GET_ALL_PUBLIC_MESSAGES, {
    variables: {
      gameId: 1,
      // for additional feature: start and end game: make this dynamic
    },
  });
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;

  return (
    <div style={{ width: "450px" }}>
      <Card>
        <Card.Header>{gameTitle} Chat</Card.Header>
        <MessageBox allPublicMessages={data.getAllPublicMessages} />
        <InputBox />
      </Card>
    </div>
  );
}
