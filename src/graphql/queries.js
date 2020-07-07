import gql from "graphql-tag";

export const GET_PLAYER_BY_TOKEN = gql`
  query getPlayerByToken($token: String) {
    getPlayerByToken(token: $token) {
      player {
        id
        name
        email
        img
        inGame
        moneyCash
        egg
        feather
        bug
        vPoint
        mMarket
        rMarket
        vMarket
      }
      error
      token
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
// For additional feature: start and end game: add param for messages: gameId

export const GET_GAME_BY_ID = gql`
  query getGameById {
    getGameById(id: 1) {
      id
      gameTitle
      gameTime
      gameTimePassed
      players {
        id
        name
        vPoint
        img
      }
    }
  }
`;
// for additional feature: start and end game: dynamic id

export const GET_ALL_PLAYERS_GAME_STATE = gql`
  query getAllPlayersGameState {
    inGame: getAllPlayersGameState(inGame: true) {
      id
      name
      inGame
    }
    outGame: getAllPlayersGameState(inGame: false) {
      id
      name
      inGame
    }
  }
`;
// for additional feature: start and end game

export const GET_TRADES_BY_ID = gql`
  query getTradesById($playerSenderId: Int, $playerReceiverId: Int) {
    getTradesById(
      playerSenderId: $playerSenderId
      playerReceiverId: $playerReceiverId
    ) {
      id
      moneyCashSender
      moneyCashReceiver
      eggSender
      eggReceiver
      featherSender
      featherReceiver
      bugSender
      bugReceiver
      closed
      playerSenderId {
        id
        name
      }
      playerReceiverId {
        id
        name
      }
    }
  }
`;

export const GET_PRIVATE_MESSAGES_BY_ID = gql`
  query getPrivateMessagesById {
    outgoing: getPrivateMessagesById(playerSenderId: 1, playerReceiverId: 2) {
      id
      content
      createdAt
      updatedAt
      playerSenderId {
        name
      }
    }
    incoming: getPrivateMessagesById(playerSenderId: 2, playerReceiverId: 1) {
      id
      content
      createdAt
      updatedAt
      playerSenderId {
        name
      }
    }
  }
`;
// for additional feature: private messages
