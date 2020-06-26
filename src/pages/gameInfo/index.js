import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";

import antonius from "../../images/avatars/antonius.png";
import archibald from "../../images/avatars/archibald.png";
import astrid from "../../images/avatars/astrid.png";
import betsy from "../../images/avatars/betsy.png";
import comrade from "../../images/avatars/comrade.png";
import cornelius from "../../images/avatars/cornelius.png";
import ebert from "../../images/avatars/ebert.png";
import frankie from "../../images/avatars/frankie.png";
import jeremiah from "../../images/avatars/jeremiah.png";
import patrice from "../../images/avatars/patrice.png";
import rick from "../../images/avatars/rick.png";
import yeanaro from "../../images/avatars/yeanaro.png";

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
      {/* <Container as={Col} md={{ span: 5, offset: 4 }} className="mt-5">
        <Row>
          <Col>
            <h5>
              <a href="https://codaisseur.com/">Codaisseur</a> portfolio project
            </h5>
            <p>
              Soaring Stocks is a fullstack App designed and built by Djimo van
              Berlo as part of Codaisseur's academy.
            </p>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col md={{ span: 1 }}>
            <Image src={antonius} />
            <br></br>
            <Image src={betsy} />
            <br></br>
            <Image src={cornelius} />
            <br></br>
            <Image src={rick} />
            <br></br>
            <Image src={comrade} />
            <br></br>
            <Image src={yeanaro} />
            <br></br>
          </Col>
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
              Each turn players build up to one market. Every night at midnight,
              new markets are built and players earn resources accordingly.
            </p>
            <p>
              Players own a number of markets. At the end of each turn, these
              markets create resources for the player. Players are free to trade
              their resources with each other at any time and by any amount
            </p>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>Resources, Markets, Attacks</h5>
            <p>Resources are used to build markets.</p>
            <Image src={moneyCashIcon} style={inlineIconStyle} />
            MoneyCash is used to build markets. The more markets you have, the
            more MoneyCash is required to build your next market.
            <Image src={eggIcon} style={inlineIconStyle} />
            egg, <Image src={featherIcon} style={inlineIconStyle} />
            feather, <Image src={bugIcon} style={inlineIconStyle} />
            bug: rare resources. You need to spend one of each of these to build
            a market.
            <Image src={vPointIcon} style={inlineIconStyle} />
            Victory Points are not used for anything, except winning!
            <br></br>
            <br></br>
            Markets generate resources. Markets cost one of each rare resource,
            in addition to 2 MoneyCash for each market that you have built.
            <Image src={marketIcon} style={inlineIconStyle} />
            <Image src={moneyCashIcon} style={inlineIconStyle} />
            Money Market generates 2 MoneyCash each turn.
            <Image src={marketIcon} style={inlineIconStyle} />
            <Image src={rareIcon} style={inlineIconStyle} />
            Rare Market generates 1 random Rare Resource each turn
            <Image src={marketIcon} style={inlineIconStyle} />
            <Image src={vPointIcon} style={inlineIconStyle} />
            Victory Market generates 1 victory point each turn
            <p>
              {" "}
              Players start with 1{" "}
              <Image src={marketIcon} style={inlineIconStyle} />
              <Image src={moneyCashIcon} style={inlineIconStyle} /> and 2
              <Image src={marketIcon} style={inlineIconStyle} />
              <Image src={rareIcon} style={inlineIconStyle} />.
            </p>
            Players can attack other players for 1{" "}
            <Image src={moneyCashIcon} style={inlineIconStyle} />. Attacking
            another player destroys a random resource.
          </Col>
          <Col md={{ span: 1 }}>
            <Image src={archibald} />
            <br></br>
            <Image src={astrid} />
            <br></br>
            <Image src={ebert} />
            <br></br>
            <Image src={frankie} />
            <br></br>
            <Image src={jeremiah} />
            <br></br>
            <Image src={patrice} />
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
}
