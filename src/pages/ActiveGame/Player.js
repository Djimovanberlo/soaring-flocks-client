import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trade from "./TradePanel";
import Container from "react-bootstrap/Container";
import { Col, Row, Image, Dropdown, DropdownButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function Player(props) {
  const {
    name,
    resources: {
      moneyCash,
      egg,
      feather,
      bug,
      vPoints,
      mMarket,
      rMarket,
      vMarket,
    },
  } = props;

  const [ability, set_ability] = useState("");
  const [abilityParam, set_abilityParam] = useState("");
  const [abilityParamForm, set_abilityParamForm] = useState(null);
  const [abilityDescription, set_abilityDescription] = useState(
    <>
      Choose an ability and its parameter<br></br>
      <br></br>
    </>
  );

  const abilityHandler = (event) => {
    console.log(event.target.value);
    set_ability(event.target.value);
    if (event.target.value === "Attack") {
      set_abilityParamForm(
        <Form>
          <Form.Group controlId="attackTargetSelect">
            <Form.Label>Select a target</Form.Label>
            <Form.Control
              as="select"
              onChange={set_abilityParam(event.target.value)}
            >
              {props.playerList.map((player) => {
                return <option>{player.name}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      );
      set_abilityDescription(
        <div>
          Destroy another player's random resource. Cannot destroy{" "}
          <Image src={vPointIcon} style={inlineIconStyle} />.
        </div>
      );
    } else if (event.target.value === "Buy") {
      set_abilityParamForm(
        <Form>
          <Form.Group controlId="buyResourceSelect">
            <Form.Label>Select a resource</Form.Label>
            <Form.Control
              as="select"
              onChange={set_abilityParam(event.target.value)}
            >
              <option>Egg</option>
              <option>Feather</option>
              <option>Bug</option>
              <option>Victory Point</option>
            </Form.Control>
          </Form.Group>
        </Form>
      );
      set_abilityDescription(
        <div>
          Pay 4<Image src={moneyCashIcon} style={inlineIconStyle} /> for a
          resource of choice<br></br>
          <br></br>
        </div>
      );
    } else if (event.target.value === "Invest") {
      set_abilityParamForm(null);
      set_abilityDescription(
        <div>
          Pay 10
          <Image src={moneyCashIcon} style={inlineIconStyle} /> to gain 4 random
          Rare Resources
        </div>
      );
    } else if (event.target.value === "No ability") {
      set_abilityParamForm(null);
      set_abilityDescription(
        <div>
          Choose an ability and its parameter<br></br>
          <br></br>
        </div>
      );
    }
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <p>Resources</p>
              <ul>
                <li>
                  <Image src={moneyCashIcon} style={iconStyle} /> {moneyCash}
                </li>
                <li>
                  <Image src={eggIcon} style={iconStyle} /> {egg}
                </li>
                <li>
                  <Image src={featherIcon} style={iconStyle} /> {feather}
                </li>
                <li>
                  <Image src={bugIcon} style={iconStyle} /> {bug}
                </li>
                <li>
                  <Image src={vPointIcon} style={iconStyle} /> {vPoints}
                </li>
              </ul>
            </Col>
            <Col>
              <p>Markets</p>
              <ul>
                <li>
                  <Image src={moneyCashIcon} style={iconStyle} />
                  <Image src={marketIcon} style={iconStyle} /> {mMarket}
                </li>
                <li>
                  <Image src={rareIcon} style={iconStyle} />
                  <Image src={marketIcon} style={iconStyle} /> {rMarket}
                </li>
                <li>
                  <Image src={vPointIcon} style={iconStyle} />
                  <Image src={marketIcon} style={iconStyle} /> {vMarket}
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Ability</p>
              <p>{abilityDescription}</p>
              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="abilitySelect">
                      <Form.Label>Select an ability</Form.Label>
                      <Form.Control as="select" onChange={abilityHandler}>
                        <option>No ability</option>
                        <option>Attack</option>
                        <option>Buy</option>
                        <option>Invest</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>{abilityParamForm}</Col>
              </Row>
            </Col>
            <Col>
              <p>Build</p>
              <p>
                Cost of building a market: <br></br>
                {(mMarket + rMarket + vMarket) * 2 - 4}
                <Image src={moneyCashIcon} style={inlineIconStyle} /> 1
                <Image src={eggIcon} style={inlineIconStyle} /> 1
                <Image src={featherIcon} style={inlineIconStyle} /> 1
                <Image src={bugIcon} style={inlineIconStyle} />
              </p>
              <Form>
                <Form.Group controlId="marketselect">
                  <Form.Label>Select a market</Form.Label>
                  <Form.Control as="select">
                    <option>Don't build anything</option>
                    <option>Money Market</option>
                    <option>Rare Market</option>
                    <option>Victory Market</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
