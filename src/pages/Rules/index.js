import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Rules() {
  return (
    <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
      <h2>Rules</h2>
    </Container>
  );
}
