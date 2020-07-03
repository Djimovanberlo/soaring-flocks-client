import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Alert } from "react-bootstrap/";
import { loginSuccess } from "../../store/player/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Col } from "react-bootstrap";

import { LOGIN_PLAYER } from "../../graphql/mutations";

export default function SignUp() {
  const [errorState, set_errorState] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const [loginPlayer, { data, loading, error }] = useMutation(LOGIN_PLAYER, {
    onCompleted({ loginPlayer }) {
      console.log("LOGINPLAYER COMPLETED", loginPlayer);
      if (loginPlayer.error) {
        set_errorState(<Alert variant="danger">{loginPlayer.error}</Alert>);
      }
      // localStorage.setItem("token", loginPlayer.token);
      if (loginPlayer.player && loginPlayer.token) {
        dispatch(loginSuccess(loginPlayer));
      }
    },
  });

  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  console.log("LOGINDATA", data);

  function submitForm(event) {
    console.log("hi", email, password);
    event.preventDefault();
    loginPlayer({
      variables: { email, password },
    });
    // dispatch(login(email, password));
    // console.log("OKAYERDATA", data.loginPlayer);
    // dispatch(loginSuccess(data.loginPlayer));

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
