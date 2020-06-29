import gql from "graphql-tag";

export const SUB_ALL_PUBLIC_MESSAGES = gql`
  subscription messageAdded {
    messageAdded {
      id
      content
    }
  }
`;
