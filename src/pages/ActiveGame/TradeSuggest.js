import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Container } from "react-bootstrap";
import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function TradeSuggest(props) {
  return (
    <Container>
      <Card>
        <Card.Header>Suggest new trade</Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col>You offer:</Col>
              <Col>Jan offers:</Col>
            </Row>
            <Row>
              <Col>
                <Image src={moneyCashIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2, align: "center" }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
              <Col>
                <Image src={moneyCashIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2 }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={eggIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2, align: "center" }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
              <Col>
                <Image src={eggIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2 }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={featherIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2, align: "center" }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
              <Col>
                <Image src={featherIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2 }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={bugIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2, align: "center" }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
              <Col>
                <Image src={bugIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2 }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={vPointIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2, align: "center" }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
              <Col>
                <Image src={vPointIcon} style={iconStyle} />
              </Col>
              <Col md={{ span: 2 }}>
                <Form.Control
                  width={1}
                  type="number"
                  min="0"
                  id="inputSenderMoneyCash"
                />
              </Col>
            </Row>
            <br></br>
          </Form>
          <Button
            Button
            variant="outline-info"
            size="sm"
            onClick={(event) => {
              console.log("Create trade");
            }}
          >
            Suggest trade
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
