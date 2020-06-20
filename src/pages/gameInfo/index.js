import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function gameInfo() {
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
              resources in order to earn victory points. Soaring flocks is
              played in 10, 20 or 30 turns. Each turn lasts a day. Whichever
              player has the most victory points by the end of the game wins
              Soaring Flocks.
            </p>
            <p>
              Each turn players build up to one market and one ability. Every
              night at midnight, new markets are built and abilities are
              executed and players earn - or lose - resources accordingly.
            </p>
            <p>
              Players own a number of markets. At the end of each turn, these
              markets create resources for the player. Players are free to trade
              their resources with each other at any time and by any amount
            </p>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>
              Resources, Markets, Abilities
            </h5>

            <p>Resources are used to build markets.</p>
            <ul>
              <li>
                <Image src={moneyCashIcon} style={inlineIconStyle} />
                MoneyCash is used to build markets. The more markets you have,
                the more MoneyCash is required to build your next market.
              </li>
              <li>
                <Image src={eggIcon} style={inlineIconStyle} />
                egg, <Image src={featherIcon} style={inlineIconStyle} />{" "}
                feather, <Image src={bugIcon} style={inlineIconStyle} />
                bug: rare resources. You need to spend one of each of these to
                build a market.
              </li>
              <li>
                <Image src={vPointIcon} style={inlineIconStyle} />
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
                <Image src={moneyCashIcon} style={inlineIconStyle} />
                <Image src={marketIcon} style={inlineIconStyle} />
                Money Market generates 2 MoneyCash each turn
              </li>
              <li>
                <Image src={rareIcon} style={inlineIconStyle} />
                <Image src={marketIcon} style={inlineIconStyle} />
                Rare Market generates 1 random Rare Resource each turn
              </li>
              <li>
                <Image src={vPointIcon} style={inlineIconStyle} />
                <Image src={marketIcon} style={inlineIconStyle} />
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
