import gql from "graphql-tag";

export const GET_PLAYER_BY_ID = gql`
  query playerById {
    playerById(id: 3) {
      id
      name
    }
  }
`;

export const GET_PLAYERS_WITH_RESOURCES = gql`
  query getPlayersWithResources {
    getPlayersWithResources {
      id
      name
      resources {
        id
      }
      playerResources {
        id
      }
    }
  }
`;

// export const GET_PLAYERS_WITH_RESOURCES = gql`
//   subscription getPlayersWithResources {
//     getPlayersWithResources {
//       name
//       playerResources {
//         id
//       }
//     }
//   }
// `;
