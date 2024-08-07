import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query CurrentUser {
    currentUser {
      name,
      avatarUrl
    }
  }
`;