import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  //TODO: Move the uri to env file
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache()
})

export default client
