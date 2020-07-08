import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";

import { CREATE_PLAYER } from "../../graphql/mutations";
import { loginSuccess } from "../../store/player/actions";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errorState, set_errorState] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createPlayer] = useMutation(CREATE_PLAYER, {
    onCompleted({ createPlayer }) {
      if (createPlayer.error) {
        set_errorState(<Alert variant="danger">{createPlayer.error}</Alert>);
      }
      if (createPlayer.player && createPlayer.token) {
        dispatch(loginSuccess(createPlayer));
        history.push("/ActiveGame");
      }
    },
  });

  function submitForm(event) {
    event.preventDefault();
    const imgArray = [
      "antonius",
      "archibald",
      "astrid",
      "betsy",
      "comrade",
      "cornelius",
      "ebert",
      "frankie",
      "jeremiah",
      "patrice",
      "rick",
      "yeanero",
    ];
    const img = imgArray[Math.floor(Math.random() * imgArray.length)];
    console.log(name, email, password, img);
    createPlayer({
      variables: { name, email, password, img },
    });
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <>
      <>{errorState}</>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <h2>Sign up</h2>
      </Container>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </>
  );
}
