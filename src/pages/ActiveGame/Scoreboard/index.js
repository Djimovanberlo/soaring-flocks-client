import React from "react";
import { Col } from "react-bootstrap";
import PlayerScore from "./PlayerScore";

export default function ScoreBoard(props) {
  const playerList = props.playerList.sort((a, b) => {
    return b.vPoint - a.vPoint;
  });

  return (
    <Col style={{ overflowY: "scroll", height: "1000px" }}>
      {playerList.map((listPlayer) => {
        return (
          <PlayerScore
            key={listPlayer.id}
            id={listPlayer.id}
            name={listPlayer.name}
            vPoint={listPlayer.vPoint}
            img={listPlayer.img}
          />
        );
      })}
      <br></br>
      <br></br>
      <br></br>
    </Col>
  );
}
