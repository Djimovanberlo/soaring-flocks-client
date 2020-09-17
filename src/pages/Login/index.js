import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Alert, Button, Container, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN_PLAYER } from "../../graphql/mutations";
import { loginSuccess } from "../../store/player/actions";

export default function SignUp() {
  const [errorState, set_errorState] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginPlayer, { loading, error }] = useMutation(LOGIN_PLAYER, {
    onCompleted({ loginPlayer }) {
      if (loginPlayer.error) {
        set_errorState(<Alert variant="danger">{loginPlayer.error}</Alert>);
      }
      if (loginPlayer.player && loginPlayer.token) {
        dispatch(loginSuccess(loginPlayer));
        history.push("/ActiveGame");
      }
    },
  });

  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return <Alert variant="danger">Error! {error.message}</Alert>;
  }

  function submitForm(event) {
    event.preventDefault();
    loginPlayer({
      variables: { email, password },
    });

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <>{errorState}</>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <h2>Log in</h2>
      </Container>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
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
              Log in
            </Button>
          </Form.Group>
          <Link to="/signup" style={{ textAlign: "center" }}>
            Click here to sign up
          </Link>
        </Form>
      </Container>
    </>
  );
}
