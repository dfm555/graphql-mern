import React from 'react'
import PropTypes from 'prop-types'
import {
  Heading,
  Divider,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Stack,
  Tooltip
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const ClientsTable = ({ clients }) => {
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
            {clients.map(client => (
              <Tr key={client.id}>
                <Td>
                  <Avatar name={client.name} src={client.avatar} />
                </Td>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>
                  <Stack direction="row" spacing={4}>
                    <Tooltip hasArrow label="Edit Client" placement="top">
                      <Button
                        borderRadius={'none'}
                        colorScheme="gray"
                        size={'sm'}
                      >
                        <EditIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label="Delete Client"
                      background={'red.400'}
                      placement="top"
                    >
                      <Button
                        borderRadius={'none'}
                        colorScheme="red"
                        size={'sm'}
                      >
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

ClientsTable.propTypes = {
  clients: PropTypes.array.isRequired
}

export default ClientsTable
