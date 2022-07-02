import { useQuery } from '@apollo/client'
import { Heading, Divider, Box, Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'

import AddClientsModal from 'components/addClientsModal/AddClientsModal'
import ClientRow from './ClientRow'

import { GET_CLIENTS } from 'grahpql/queries/clientQueries'

const ClientsTable = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS, { notifyOnNetworkStatusChange: true })

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading</div>

  return (
    <>
      <Heading mt={10} size={'lg'}>
        Clients
      </Heading>
      <Divider mt={2} variant={'dashed'} />
      <Box mt={10} mb={10}>
        <AddClientsModal />
        <TableContainer borderWidth='1px' borderRadius='lg' mt={'5'}>
          <Table variant={'striped'} colorScheme={'facebook'} size={'sm'}>
            <Thead h='60px' bg={'blue.700'}>
              <Tr>
                <Th />
                <Th color={'white'}>Name</Th>
                <Th color={'white'}>Email</Th>
                <Th color={'white'}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.clients?.map(client => (
                <ClientRow key={client.id} client={client} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default ClientsTable
