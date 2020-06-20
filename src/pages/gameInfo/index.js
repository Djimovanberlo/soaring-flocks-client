import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";

import bug from "../../images/icons/bug.png";
import egg from "../../images/icons/egg.png";
import feather from "../../images/icons/feather.png";
import market from "../../images/icons/market.png";
import moneyCash from "../../images/icons/moneyCash.png";
import rare from "../../images/icons/rare.png";
import vPoint from "../../images/icons/vPoint.png";

export default function gameInfo() {
  const iconStyle = {
    width: 25,
    height: 25,
  };

  return (
    <>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <Row>
          <Col>
            <h2>Soaring Flocks</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h5 style={{ textAlign: "center" }}>IMG</h5>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>
              <a href="https://codaisseur.com/">Codaisseur</a> portfolio project
            </h5>
            <p>
              Soaring Stocks is a fullstack App designed and built by Djimo van
              Berlo as part of Codaisseur's academy.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h5 style={{ textAlign: "center" }}>Rules</h5>
            <p>
              Soaring flocks is a multiplayer game where up to 12 players take
              on the role of capitalist birds to collect, spend and trade
              resources in orde to earn victory points. Soaring flocks is played
              in 10, 20 or 30 turns, each turn lasts a day. Whichever player has
              the most victory points by the end of the game wins Soaring
              Flocks.
            </p>
            <p>
              Each turn players build up to one market and one ability. Every
              night at midnight, new markets are built and abilities are
              executed and players earn - or lose - resources accordingly.
            </p>
            <p>
              Players own a number of markets. At the end of each turn, these
              markets create a resource for the player. Players are free to
              trade their resources with eachother at any time and by any amount
            </p>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>
              Resources, Markets, Abilities
            </h5>

            <p>
              Resources are used to build markets, except for Victory Points
            </p>
            <ul>
              <li>
                <Image src={moneyCash} style={iconStyle} />
                MoneyCash is used to build markets. The more markets you have,
                the more MoneyCash is required to build your next market.
              </li>
              <li>
                <Image src={egg} style={iconStyle} />
                egg, <Image src={feather} style={iconStyle} /> feather,{" "}
                <Image src={bug} style={iconStyle} />
                bug: rare resources. You need to spend one of each of these to
                build a market.
              </li>
              <li>
                <Image src={vPoint} style={iconStyle} />
                Victory Points are not for anything, except for winning!
              </li>
            </ul>
            <p>
              Markets generate resources. Markets cost one of each rare
              resource, in addition to 2 MoneyCash for each market that you
              already have.
            </p>
            <ul>
              <li>
                <Image src={moneyCash} style={iconStyle} />
                <Image src={market} style={iconStyle} />
                Money Market generates 2 MoneyCash each turn
              </li>
              <li>
                <Image src={rare} style={iconStyle} />
                <Image src={market} style={iconStyle} />
                Rare Market generates 1 random Rare Resource each turn
              </li>
              <li>
                <Image src={vPoint} style={iconStyle} />
                <Image src={market} style={iconStyle} />
                Victory Market generates 1 victory point each turn
              </li>
            </ul>
            <p>Abilities are executed at midnight each day</p>
            <ul>
              <li>Attack to destroy another player's random resource</li>
              <li>Buy a resource for 3 MoneyCash</li>
              <li>Invest 10 MoneyCash to gain 4 random Rare Resources</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
