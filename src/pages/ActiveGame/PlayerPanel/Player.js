import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card, ListGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trade from "../TradePanel";
import Container from "react-bootstrap/Container";
import { Col, Row, Image, Dropdown, DropdownButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { GET_PLAYER_BY_ID } from "../../../graphql/queries";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import bugIcon from "../../../images/icons/bugIcon.png";
import eggIcon from "../../../images/icons/eggIcon.png";
import featherIcon from "../../../images/icons/featherIcon.png";
import marketIcon from "../../../images/icons/marketIcon.png";
import moneyCashIcon from "../../../images/icons/moneyCashIcon.png";
import rareIcon from "../../../images/icons/rareIcon.png";
import vPointIcon from "../../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../../styles/imgStyles";
import { CREATE_ATTACK, CREATE_MARKET } from "../../../graphql/mutations";
import { CREATE_PUBLIC_MESSAGE } from "../../../graphql/mutations";
import { selectPlayerId, selectPlayer } from "../../../store/player/selectors";

export default function Player(props) {
  const [attack, set_attack] = useState("Don't attack anyone");
  const [market, set_market] = useState("Don't build anything");
  const [marketAvailable, set_marketAvailable] = useState(null);
  const [ability, set_ability] = useState("");
  const [abilityParam, set_abilityParam] = useState("");
  const [abilityParamForm, set_abilityParamForm] = useState(null);
  const [abilityDescription, set_abilityDescription] = useState(
    <>
      Choose an ability and its parameter<br></br>
      <br></br>
    </>
  );
  const playerId = useSelector(selectPlayerId);
  console.log("PLAYERSELECT", playerId);
  const [createMarket] = useMutation(CREATE_MARKET);
  const [createAttack] = useMutation(CREATE_ATTACK);
  const [createPublicMessage] = useMutation(CREATE_PUBLIC_MESSAGE);
  const { data, error, loading } = useQuery(GET_PLAYER_BY_ID, {
    variables: {
      id: playerId,
    },
  });
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  console.log("data:", data, "error:", error, "loading:", loading);
  const {
    id,
    name,
    moneyCash,
    egg,
    feather,
    bug,
    vPoint,
    mMarket,
    rMarket,
    vMarket,
  } = data.getPlayerById;

  const cashMoneyCost = (mMarket + rMarket + vMarket) * 2 - 6;

  console.log("HOI111", props.playerList, id);

  const filteredList = props.playerList.filter((player) => player.id !== id);
  // Cannot ternary for <option> since React will complain about a missing key while mapping @ attack options

  console.log("HOI222", filteredList);

  const attackHandler = (event) => {
    // event.preventDefault();
    console.log(id, attack);
    createAttack({
      variables: {
        playerId: id,
        ability: attack,
      },
    });
    console.log("WHO");
    window.location.reload(false);
  };

  const marketHandler = (event) => {
    // event.preventDefault();
    console.log(id, market);
    createMarket({
      variables: {
        playerId: id,
        market: market,
        cashMoney: cashMoneyCost,
      },
    });
    window.location.reload(false);
  };

  const gameLeaver = (event) => {
    event.preventDefault();
    console.log("LEAVE");
  };

  return (
    <Container>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <p>Resources</p>
              <p>
                <Image src={moneyCashIcon} style={iconStyle} /> {moneyCash}
              </p>
              <p>
                <Image src={eggIcon} style={iconStyle} /> {egg}
              </p>
              <p>
                <Image src={featherIcon} style={iconStyle} /> {feather}
              </p>
              <p>
                <Image src={bugIcon} style={iconStyle} /> {bug}
              </p>
              <p>
                <Image src={vPointIcon} style={iconStyle} /> {vPoint}
              </p>
            </Col>
            <Col>
              <div>Markets</div>
              <br></br>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Image src={marketIcon} style={iconStyle} />
                  <Image src={moneyCashIcon} style={iconStyle} />
                  {mMarket}
                  <br></br>generate {mMarket * 2}{" "}
                  <Image src={moneyCashIcon} style={inlineIconStyle} /> each
                  turn.
                </ListGroup.Item>
                <ListGroup.Item>
                  <Image src={marketIcon} style={iconStyle} />
                  <Image src={rareIcon} style={iconStyle} />
                  {rMarket}
                  <br></br>generate {rMarket}{" "}
                  <Image src={eggIcon} style={inlineIconStyle} />/
                  <Image src={featherIcon} style={inlineIconStyle} />/
                  <Image src={bugIcon} style={inlineIconStyle} /> each turn.
                </ListGroup.Item>
                <ListGroup.Item>
                  <Image src={marketIcon} style={iconStyle} />
                  <Image src={vPointIcon} style={iconStyle} />
                  {vMarket}
                  <br></br>generate {vMarket}{" "}
                  <Image src={vPointIcon} style={inlineIconStyle} /> each turn.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Container>
              <hr></hr>
              <Row>
                <Col>
                  <div>Attack</div>
                  <div>
                    <br></br>
                    Cost of attacking:
                    <Image src={moneyCashIcon} style={inlineIconStyle} />1
                    <br></br>
                    Attacking destroys one{" "}
                    <Image src={moneyCashIcon} style={inlineIconStyle} />
                    1 /
                    <Image src={eggIcon} style={inlineIconStyle} />1 /
                    <Image src={featherIcon} style={inlineIconStyle} />1 /
                    <Image src={bugIcon} style={inlineIconStyle} />1 /
                    <Image src={vPointIcon} style={inlineIconStyle} />1 at
                    random
                  </div>
                  <br></br>
                  <Row>
                    <Col>
                      {" "}
                      {moneyCash <= 0 ? (
                        <></>
                      ) : (
                        <Form>
                          <Form.Group controlId="abilitySelect">
                            <Form.Label>Select a target</Form.Label>
                            <Form.Control
                              as="select"
                              onChange={(event) => {
                                set_attack(event.target.value);
                              }}
                              defaultValue="Don't attack anyone"
                            >
                              <option>Don't attack anyone</option>
                              {filteredList.map((player) => {
                                return (
                                  <option key={player.id}>{player.name}</option>
                                );
                              })}
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="submitForm">
                            {attack !== "Don't attack anyone" ? (
                              <Button
                                variant="outline-danger"
                                type="submit"
                                onClick={attackHandler}
                              >
                                Attack
                              </Button>
                            ) : (
                              <>
                                <br></br>
                              </>
                            )}
                          </Form.Group>
                        </Form>
                      )}
                    </Col>
                    <Col>{abilityParamForm}</Col>
                  </Row>
                </Col>
                <Col>
                  <div>Build</div>
                  <br></br>
                  <div>
                    Cost of building a market: <br></br>
                    <Image src={moneyCashIcon} style={inlineIconStyle} />
                    {cashMoneyCost}
                    <Image src={eggIcon} style={inlineIconStyle} />1
                    <Image src={featherIcon} style={inlineIconStyle} />1
                    <Image src={bugIcon} style={inlineIconStyle} />1
                  </div>
                  <br></br>
                  <br></br>
                  {/* {moneyCash < ((mMarket + rMarket + vMarket) * 2 - 6) || egg < 1 || feather < 1 || bug <1 ? (<></>) :  */}
                  <Form>
                    <Form.Group controlId="marketselect">
                      <Form.Label>Select a market</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(event) => {
                          set_market(event.target.value);
                        }}
                        defaultValue="Don't build anything"
                      >
                        <option>Don't build anything</option>
                        <option>Money Market</option>
                        <option>Rare Market</option>
                        <option>Victory Market</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="submitForm">
                      {market !== "Don't build anything" ? (
                        <Button
                          variant="outline-info"
                          type="submit"
                          onClick={marketHandler}
                        >
                          Build
                        </Button>
                      ) : (
                        <>
                          <br></br>
                        </>
                      )}
                    </Form.Group>
                  </Form>
                  {/* } */}
                </Col>
              </Row>
            </Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
