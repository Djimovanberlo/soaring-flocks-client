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
              <Col>
                Your offer:
                <Row>
                  <Image src={moneyCashIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderMoneyCash"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={eggIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderEgg"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={featherIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderFeather"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={bugIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderEgg"
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Col>
                Their offer:
                <Row>
                  <Image src={moneyCashIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverMoneyCash"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={eggIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverEgg"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={featherIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverFeather"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={bugIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverEgg"
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Form>
          <Button
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
