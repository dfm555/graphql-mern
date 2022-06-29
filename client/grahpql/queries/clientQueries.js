import { gql } from '@apollo/client'

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      avatar
      name
      email
      phone
    }
  }
`

export { GET_CLIENTS }
