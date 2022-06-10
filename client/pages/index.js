import NextLink from 'next/link'
import { gql } from '@apollo/client'
import { Box, Grid, GridItem, Heading, Link } from '@chakra-ui/react'

import ClientsTable from 'components/clientsTable'

import client from '../apollo-client'

const Home = ({ data }) => (
  <Grid
    templateAreas={`"header"
                  "main"
                  "footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'1fr'}
    gap="0 0"
    h={'100vh'}
  >
    <GridItem pl="2" pr="2" bg="black" area={'header'}>
      <Box maxW={'7xl'} m={'0 auto'}>
        <Heading as={'h1'} color="white">
          Projects
        </Heading>
      </Box>
    </GridItem>
    <GridItem pl="2" pr="2" area={'main'} gridColumnEnd={'none'}>
      <Box maxW={'7xl'} m={'0 auto'}>
        <ClientsTable clients={data} />
      </Box>
    </GridItem>
    <GridItem
      display={'flex'}
      pl="2"
      bg="gray.300"
      area={'footer'}
      justifyContent={'center'}
    >
      <NextLink href="https://github.com/dfm555" passHref>
        <Link color={'black'} isExternal>
          &copy; Copyright 2022 dfm55
        </Link>
      </NextLink>
    </GridItem>
  </Grid>
)

export async function getServerSideProps() {
  let data = []
  let error = false
  try {
    const request = await client.query({
      query: gql`
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
    })
    data = request.data.clients
  } catch (ApolloError) {
    console.log(ApolloError.toString())
    error = ApolloError.toString()
  }

  return {
    props: {
      error,
      data
    }
  }
}

export default Home
