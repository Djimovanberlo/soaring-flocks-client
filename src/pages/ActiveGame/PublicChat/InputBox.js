import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";

import { CREATE_PUBLIC_MESSAGE } from "../../../graphql/mutations";
import {
  selectPlayerName,
  selectPlayerId,
} from "../../../store/player/selectors";

export default function InputBox() {
  const playerName = useSelector(selectPlayerName);
  const playerId = useSelector(selectPlayerId);

  const [msgLengthError, set_msgLengthError] = useState("");
  const [newMessage, set_newMessage] = useState({
    player: playerName,
    content: "",
  });

  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);

  const handleOnKeyPress = (target) => {
    if (target.charCode === 13) {
      if (newMessage.content.length < 250) {
        createPublicMessage({
          variables: { playerId: playerId, content: newMessage.content },
        });
        set_newMessage({ player: playerName, content: "" });
      } else {
        set_msgLengthError("Chat messages must be 250 or less characters.");
        set_newMessage({ player: playerName, content: "" });
      }
    }
  };

  return (
    <>
      <Form>
        <Form.Control
          type="text"
          as="textarea"
          rows="3"
          value={newMessage.content}
          onChange={(event) => {
            set_newMessage({ ...newMessage, content: event.target.value });
          }}
          onKeyPress={handleOnKeyPress}
        />
      </Form>
      <br></br>
      {msgLengthError}
    </>
  );
}
