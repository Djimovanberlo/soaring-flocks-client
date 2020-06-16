import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

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
      <Container>
        <h3>Create Game</h3>
      </Container>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formGameTitle">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={gameTitle}
              onChange={(event) => set_gameTitle(event.target.value)}
              type="title"
              placeholder="Enter game title"
              required
            />
          </Form.Group>

          <Form.Group controlId="formGameTime">
            <Form.Label>Game time</Form.Label>
            <Form.Control
              value={gameTime}
              onChange={(event) => set_gameTime(event.target.value)}
              as="select"
              defaultValue={gameTime}
              required
            >
              <option>10 days</option>
              <option>20 days</option>
              <option>30 days</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>Player 1</option>
              <option>Player 2</option>
              <option>Player 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>Player 4</option>
              <option>Player 5</option>
              <option>Player 6</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Start Game
            </Button>
          </Form.Group>
        </Form>
      </Container>{" "}
      <Container>
        {" "}
        <div class="overflow-auto">
          This is an example of using .overflow-auto on an element with set
          width and height dimensions. By design, this content will vertically
          scroll.
        </div>
      </Container>
    </>
  );
}
