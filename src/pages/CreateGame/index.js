import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function CreateGame() {
  const [gameTitle, set_gameTitle] = useState("");
  const [gameTime, set_gameTime] = useState("10 days");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log(gameTitle, parseInt(gameTime));
    console.log(typeof parseInt(gameTime));
    event.preventDefault();

    // dispatch(login(email, password));

    // setEmail("");
    // setPassword("");
    // send user to Active Game page
  }
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
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Player 1</option>
                  <option>Player 2</option>
                  <option>Player 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={{ span: 3 }}>
              <Form.Group controlId="playersOutsideGame">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>Player 4</option>
                  <option>Player 5</option>
                  <option>Player 6</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Start Game
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
