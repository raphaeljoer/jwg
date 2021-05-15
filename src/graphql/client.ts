import {graphql} from '@/config/app';
import {GraphQLClient} from 'graphql-request';

const endpoint = graphql.GRAPHQL_HOST;
const token = graphql.GRAPHQL_TOKEN;

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: token
  }
});

export default client;
