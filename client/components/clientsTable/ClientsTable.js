import { useQuery } from '@apollo/client'
import { Heading, Divider, Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
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
      <TableContainer mt={'5'}>
        <Table variant={'striped'} colorScheme={'facebook'} size={'sm'}>
          <Thead>
            <Tr>
              <Th />
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.clients?.map(client => (
              <ClientRow key={client.id} client={client} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ClientsTable
