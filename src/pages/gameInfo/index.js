import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row, Image } from "react-bootstrap";

import { inlineIconStyle, avatarStyle } from "../../styles/imgStyles";
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
import yeanero from "../../images/avatars/yeanero.png";
import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";

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
          <Col md={{ span: 2 }}>
            <Image src={antonius} style={avatarStyle} />
            <br></br>
            <Image src={betsy} style={avatarStyle} />
            <br></br>
            <Image src={cornelius} style={avatarStyle} />
            <br></br>
            <Image src={rick} style={avatarStyle} />
            <br></br>
            <Image src={comrade} style={avatarStyle} />
            <br></br>
            <Image src={yeanero} style={avatarStyle} />
            <br></br>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>Rules</h5>
            <p>
              Soaring flocks is a multiplayer game where up to 20 players take
              on the role of capitalist birds to collect, spend and trade
              resources in order to earn victory points. In Soaring Flocks, each
              turn lasts a day. Players' goal is to collect as many Victory
              Points as they can.
            </p>
            <p>
              Each Player has a number of markets, that produce resources. Every
              night at midnight, Players earn resources accordingly.
            </p>
            <p>
              Players are free to trade their resources with each other at any
              time and by any amount
            </p>{" "}
            <hr></hr>
            <h5 style={{ textAlign: "center" }}>Upcoming features</h5>
            <p>
              Games actually start and end. Players can create a game, add other
              players and start their game. Whichever player has the most
              Victory Points by the end of the game, wins.
            </p>{" "}
            <hr></hr>
            <p>
              The page no longer refreshes on handling trades, but is directly
              subscribed to changes make to trades.
            </p>{" "}
            <hr></hr>
            <p>Players can chat one on one.</p> <hr></hr>
            <p>Styling improvements.</p>
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
              <Image src={rareIcon} style={inlineIconStyle} /> markets. They
              also receive 1 of each{" "}
              <Image src={eggIcon} style={inlineIconStyle} />
              egg, <Image src={featherIcon} style={inlineIconStyle} />
              feather, <Image src={bugIcon} style={inlineIconStyle} /> bug.
            </p>
            Players can attack other players for 1{" "}
            <Image src={moneyCashIcon} style={inlineIconStyle} />. Attacking
            another player destroys a random resource.
          </Col>
          <Col md={{ span: 1 }}>
            <Image src={archibald} style={avatarStyle} />
            <br></br>
            <Image src={astrid} style={avatarStyle} />
            <br></br>
            <Image src={ebert} style={avatarStyle} />
            <br></br>
            <Image src={frankie} style={avatarStyle} />
            <br></br>
            <Image src={jeremiah} style={avatarStyle} />
            <br></br>
            <Image src={patrice} style={avatarStyle} />
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
}
