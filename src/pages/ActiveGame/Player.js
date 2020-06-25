import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card, ListGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trade from "./TradePanel";
import Container from "react-bootstrap/Container";
import { Col, Row, Image, Dropdown, DropdownButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { GET_PLAYER_BY_ID } from "../../graphql/queries";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function Player(props) {
  const [attack, set_attack] = useState("");
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
  const { data, error, loading } = useQuery(GET_PLAYER_BY_ID);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
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

  const attackHandler = (event) => {
    event.preventDefault();
    console.log("WHO");
  };

  const gameLeaver = (event) => {
    event.preventDefault();
    console.log("LEAVE");
  };

  // const abilityHandler = (event) => {
  //   console.log(event.target.value);
  //   set_ability(event.target.value);
  //   if (event.target.value === "Attack") {
  //     set_abilityParamForm(
  //       <Form>
  //         <Form.Group controlId="attackTargetSelect">
  //           <Form.Label>Select a target</Form.Label>
  //           <Form.Control
  //             as="select"
  //             onChange={set_abilityParam(event.target.value)}
  //           >
  //             {props.playerList.map((player) => {
  //               return <option key={player.id}>{player.name}</option>;
  //             })}
  //           </Form.Control>
  //         </Form.Group>
  //       </Form>
  //     );
  //     set_abilityDescription(
  //       <>
  //         Destroy another player's random resource.
  //         <br></br>
  //         <br></br>
  //       </>
  //     );
  //   } else if (event.target.value === "Buy") {
  //     set_abilityParamForm(
  //       <Form>
  //         <Form.Group controlId="buyResourceSelect">
  //           <Form.Label>Select a resource</Form.Label>
  //           <Form.Control
  //             as="select"
  //             onChange={set_abilityParam(event.target.value)}
  //           >
  //             <option>Egg</option>
  //             <option>Feather</option>
  //             <option>Bug</option>
  //             <option>Victory Point</option>
  //           </Form.Control>
  //         </Form.Group>
  //       </Form>
  //     );
  //     set_abilityDescription(
  //       <>
  //         Pay 4<Image src={moneyCashIcon} style={inlineIconStyle} /> for a
  //         resource of choice<br></br>
  //         <br></br>
  //       </>
  //     );
  //   } else if (event.target.value === "Invest") {
  //     set_abilityParamForm(null);
  //     set_abilityDescription(
  //       <>
  //         Pay 10
  //         <Image src={moneyCashIcon} style={inlineIconStyle} /> to gain 4 random
  //         Rare Resources
  //         <br></br>
  //         <br></br>
  //       </>
  //     );
  //   } else if (event.target.value === "No ability") {
  //     set_abilityParamForm(null);
  //     set_abilityDescription(
  //       <>
  //         Choose an ability and its parameter<br></br>
  //         <br></br>
  //       </>
  //     );
  //   }
  // };

  // if (
  //   moneyCash < (mMarket + rMarket + vMarket) * 2 - 6 ||
  //   egg < 1 ||
  //   feather < 1 ||
  //   bug < 1
  // ) {
  //   set_marketAvailable(<>Not enough resrouces</>);
  // } else {
  //   set_marketAvailable(
  //     <Form>
  //       <Form.Group controlId="marketselect">
  //         <Form.Label>Select a market</Form.Label>
  //         <Form.Control as="select">
  //           <option>Don't build anything</option>
  //           <option>Money Market</option>
  //           <option>Rare Market</option>
  //           <option>Victory Market</option>
  //         </Form.Control>
  //       </Form.Group>
  //     </Form>
  //   );
  // }

  // Cost of building a market: <br></br>
  // <Image src={moneyCashIcon} style={inlineIconStyle} />
  // {(mMarket + rMarket + vMarket) * 2 - 6}
  // <Image src={eggIcon} style={inlineIconStyle} />1
  // <Image src={featherIcon} style={inlineIconStyle} />1
  {
    /* <Image src={bugIcon} style={inlineIconStyle} />1 */
  }

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
                    Cost of attacking: <br></br>
                    <Image src={moneyCashIcon} style={inlineIconStyle} />1
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
                            >
                              {props.playerList.map((player) => {
                                return (
                                  <option key={player.id}>{player.name}</option>
                                );
                              })}

                              {/* <option>No ability</option>
                            <option>Attack</option>
                            <option>Buy</option>
                            <option>Invest</option> */}
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="submitForm">
                            <Button
                              variant="outline-danger"
                              type="submit"
                              onClick={attackHandler}
                            >
                              Attack
                            </Button>
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
                    {(mMarket + rMarket + vMarket) * 2 - 6}
                    <Image src={eggIcon} style={inlineIconStyle} />1
                    <Image src={featherIcon} style={inlineIconStyle} />1
                    <Image src={bugIcon} style={inlineIconStyle} />1
                  </div>
                  <br></br>
                  {
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
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Button variant="danger" type="submit" onClick={gameLeaver}>
                    Leave Game
                  </Button>
                </Col>
              </Row>
            </Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
