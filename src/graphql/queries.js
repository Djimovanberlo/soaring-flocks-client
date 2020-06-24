import gql from "graphql-tag";

export const GET_PLAYER_BY_ID = gql`
  query playerById {
    playerById(id: 1) {
      id
      name
      moneyCash
      egg
      feather
      bug
      vPoint
      mMarket
      rMarket
      vMarket
    }
  }
`;

export const GET_ALL_PUBLIC_MESSAGES = gql`
  query getAllPublicMessages {
    getAllPublicMessages {
      id
      content
      playerId {
        id
        name
      }
    }
  }
`;

export const SUB_ALL_PUBLIC_MESSAGES = gql`
  subscription getAllPublicMessages {
    getAllPublicMessages {
      id
      content
      playerId {
        id
        name
      }
    }
  }
`;
