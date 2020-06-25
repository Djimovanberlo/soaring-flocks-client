import gql from "graphql-tag";

export const CREATE_PLAYER = gql`
  mutation createPlayer($name: String, $email: String, $password: String) {
    createPlayer(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

export const CREATE_ATTACK = gql`
  mutation createAttack($playerId: Int, $ability: String) {
    createAttack(playerId: $playerId, ability: $ability) {
      id
    }
  }
`;

export const CREATE_MARKET = gql`
  mutation createMarket($playerId: Int, $market: String) {
    createMarket(playerId: $playerId, market: $market) {
      id
    }
  }
`;

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
