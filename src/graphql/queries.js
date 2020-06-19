import gql from "graphql-tag";

export const GET_ALL_PLAYERS_INGAME_SCORE = gql`
  query playersInGame {
    player(inGame: true) {
      name
    }
  }
`;
