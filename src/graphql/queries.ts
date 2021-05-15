import { gql } from 'graphql-request';

export const GET_CATALOGS = gql`
query getCatalogs($first: Int) {
    catalogs(first: $first) {
      id
      name
    	releaseDate
    	url
    	partner {
        name
        logo {
          url
        }
      }
    }
  }
`;
