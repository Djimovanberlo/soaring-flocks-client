import gql from "graphql-tag";

export const GET_PLAYER_BY_ID = gql`
  query getPlayerById {
    getPlayerById(id: 1) {
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

export const GET_GAME_BY_ID = gql`
  query getGameById {
    getGameById(id: 1) {
      gameTitle
      players {
        id
        name
        vPoint
      }
    }
  }
`;

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
    # incoming: getTradesById(
    #   playerSenderId: 2
    #   playerReceiverId: 1
    #   closed: false
    # ) {
    #   id
    #   moneyCashSender
    #   moneyCashReceiver
    #   eggSender
    #   eggReceiver
    #   featherSender
    #   featherReceiver
    #   bugSender
    #   bugReceiver
    #   closed
    #   playerSenderId {
    #     id
    #     name
    #   }
    #   playerReceiverId {
    #     id
    #     name
    #   }
    # }
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

// ----------- MUTATIONS ----------------

export const CREATE_PUBLIC_MESSAGE = gql`
  mutation createPublicMessage($playerId: Int, $content: String) {
    createPublicMessage(playerId: $playerId, content: $content) {
      playerId {
        id
      }
      content
    }
  }
`;

export const CLOSE_TRADE = gql`
  mutation closeTrade($id: Int, $closed: Boolean) {
    closeTrade(id: $id, closed: $closed) {
      closed
    }
  }
`;

export const ACCEPT_TRADE = gql`
  mutation acceptTrade(
    $id: Int
    $playerSenderId: Int
    $playerReceiverId: Int
    $moneyCashSender: Int
    $moneyCashReceiver: Int
    $eggSender: Int
    $eggReceiver: Int
    $featherSender: Int
    $featherReceiver: Int
    $bugSender: Int
    $bugReceiver: Int
  ) {
    acceptTrade(
      id: $id
      playerSenderId: $playerSenderId
      playerReceiverId: $playerReceiverId
      moneyCashSender: $moneyCashSender
      moneyCashReceiver: $moneyCashReceiver
      eggSender: $eggSender
      eggReceiver: $eggReceiver
      featherSender: $featherSender
      featherReceiver: $featherReceiver
      bugSender: $bugSender
      bugReceiver: $bugReceiver
    ) {
      id
      playerSenderId {
        id
      }
      playerReceiverId {
        id
      }
      moneyCashSender
      moneyCashReceiver
      eggSender
      eggReceiver
      featherSender
      featherReceiver
      bugSender
      bugReceiver
    }
  }
`;

export const SUGGEST_TRADE = gql`
  mutation suggestTrade(
    $playerSenderId: Int
    $playerReceiverId: Int
    $moneyCashSender: Int
    $moneyCashReceiver: Int
    $eggSender: Int
    $eggReceiver: Int
    $featherSender: Int
    $featherReceiver: Int
    $bugSender: Int
    $bugReceiver: Int
  ) {
    suggestTrade(
      playerSenderId: $playerSenderId
      playerReceiverId: $playerReceiverId
      moneyCashSender: $moneyCashSender
      moneyCashReceiver: $moneyCashReceiver
      eggSender: $eggSender
      eggReceiver: $eggReceiver
      featherSender: $featherSender
      featherReceiver: $featherReceiver
      bugSender: $bugSender
      bugReceiver: $bugReceiver
    ) {
      playerSenderId {
        id
      }
      playerReceiverId {
        id
      }
      moneyCashSender
      moneyCashReceiver
      eggSender
      eggReceiver
      featherSender
      featherReceiver
      bugSender
      bugReceiver
    }
  }
`;

// ----------- SUBSCRIPTIONS ------------

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
