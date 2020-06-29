import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Alert } from "react-bootstrap";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { GET_ALL_PLAYERS_GAME_STATE } from "../../graphql/queries";
import { useQuery, useSubscription } from "@apollo/react-hooks";

export default function CreateGame() {
  const [gameTitle, set_gameTitle] = useState("");
  const [gameTime, set_gameTime] = useState("10 days");
  const [playersInGame, set_playersInGame] = useState([]);
  const [playersOutGame, set_playersOutGame] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const { data, error, loading } = useQuery(GET_ALL_PLAYERS_GAME_STATE);
  // set_playersInGame(data.inGame);
  // set_playersOutGame(data.outGame);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  console.log("GAMEDATA", data);

  // set_playersOutGame(
  //   data.outGame.map((player) => {
  //     return player.name;
  //   })
  // );

  // TO DO: max 12 players
  const addToGameListener = (event) => {
    console.log(playersInGame, event.target.value, "WQWRQR");
    set_playersInGame([...playersInGame, event.target.value].sort());
    set_playersOutGame(
      [
        ...playersOutGame.filter((player) => player !== event.target.value),
      ].sort()
    );
  };

  const removeFromGameListener = (event) => {
    set_playersOutGame([...data.outGame, event.target.value].sort());
    set_playersInGame(
      [...playersInGame.filter((player) => player != event.target.value)].sort()
    );
  };

  const submitForm = (event) => {
    console.log(gameTitle, parseInt(gameTime));
    console.log(typeof parseInt(gameTime));
    event.preventDefault();
  };
  return (
    <>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <h2>Create Game</h2>
      </Container>
      <Container as={Col} md={{ offset: 3 }}>
        <Form md={{ span: 6 }} className="mt-5">
          <Row>
            <Col md={{ span: 6 }}>
              <Form.Group controlId="formGameTitle">
                <Form.Label>Game title</Form.Label>
                <Form.Control
                  value={gameTitle}
                  onChange={(event) => set_gameTitle(event.target.value)}
                  type="title"
                  placeholder="Enter game title"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6 }}>
              <Form.Group controlId="formGameTime">
                <Form.Label>Game time</Form.Label>
                <Form.Control
                  value={gameTime}
                  onChange={(event) => set_gameTime(event.target.value)}
                  as="select"
                  required
                >
                  <option>10 days</option>
                  <option>20 days</option>
                  <option>30 days</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3 }}>
              <Form.Group controlId="playersInGame">
                <Form.Label>Click on a name to remove from game</Form.Label>
                <Form.Control as="select" onClick={removeFromGameListener}>
                  {playersInGame.map((player, index) => {
                    return <option key={index}>{player}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 3 }}>
              <Form.Group controlId="playersOutGame">
                <Form.Label>Click on a name to add to game</Form.Label>
                <Form.Control as="select" onClick={addToGameListener}>
                  {data.outGame.map((player, index) => {
                    return <option key={player.id}>{player.name}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          {playersInGame.length} Player(s) in game:{" "}
          {playersInGame.map((player) => {
            return `${player} `;
          })}
          <br></br>
          <br></br>
          <Form.Group controlId="submitForm">
            <Button variant="outline-info" type="submit" onClick={submitForm}>
              Start Game
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
