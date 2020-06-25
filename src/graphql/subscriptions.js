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
