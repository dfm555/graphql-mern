import NextLink from 'next/link'
import Image from 'next/image'

import { Box, Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react'

import { initializeApollo, addApolloState } from 'lib/apolloClient'
import { GET_CLIENTS } from 'grahpql/queries/clientQueries'

import ClientsTable from 'components/clientsTable'
import Projects from 'components/projects'
import AddClientsModal from '../components/addClientsModal/AddClientsModal'

const Home = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={'auto 1fr auto'}
      gridTemplateColumns={'1fr'}
      gap='0 0'
      h={'100vh'}
    >
      <GridItem pl='2' pr='2' bg='black' area={'header'}>
        <Box maxW={'7xl'} m={'0 auto'} pt='5' pb='5'>
          <Heading as={'h1'} color='white' display={'flex'} alignItems={'center'}>
            <Image src='/GraphQL_Logo.svg' layout={'fixed'} height={50} width={50} alt='GraphQL Logo' />
            <Text ml={'10px'}>Projects</Text>
          </Heading>
        </Box>
      </GridItem>
      <GridItem pl='2' pr='2' area={'main'} gridColumnEnd={'none'}>
        <Box maxW={'7xl'} m={'0 auto'}>
          <AddClientsModal />
          <Projects />
          <ClientsTable />
        </Box>
      </GridItem>
      <GridItem display={'flex'} p={'1'} bg='gray.300' area={'footer'} justifyContent={'center'}>
        <NextLink href='https://github.com/dfm555' passHref>
          <Link color={'black'} isExternal>
            &copy; Copyright 2022 dfm55
          </Link>
        </NextLink>
      </GridItem>
    </Grid>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_CLIENTS
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  })
}

export default Home
