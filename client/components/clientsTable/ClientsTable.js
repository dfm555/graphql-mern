import { useQuery } from '@apollo/client'
import { Box, Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'

import ClientRow from './ClientRow'

import { GET_CLIENTS } from 'grahpql/queries/clientQueries'

const ClientsTable = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS, { notifyOnNetworkStatusChange: true })

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading</div>

  return (
    <>
      <Box mt={10} mb={10}>
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
