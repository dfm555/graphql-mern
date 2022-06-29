import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { Avatar, Button, Stack, Td, Tooltip, Tr } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import { DELETE_CLIENT } from 'grahpql/mutations/clientMutations'
import { GET_CLIENTS } from 'grahpql/queries/clientQueries'

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT)

  const handleDelete = async () => {
    await deleteClient({
      variables: { id: client.id },
      refetchQueries: [{ query: GET_CLIENTS }]
    })
  }

  return (
    <Tr>
      <Td>
        <Avatar name={client.name} src={client.avatar} />
      </Td>
      <Td>{client.name}</Td>
      <Td>{client.email}</Td>
      <Td>
        <Stack direction='row' spacing={4}>
          <Tooltip hasArrow label='Edit Client' placement='top'>
            <Button borderRadius={'none'} colorScheme='gray' size={'sm'}>
              <EditIcon />
            </Button>
          </Tooltip>
          <Tooltip hasArrow label='Delete Client' background={'red.400'} placement='top'>
            <Button borderRadius={'none'} colorScheme='red' size={'sm'} onClick={() => handleDelete()}>
              <DeleteIcon />
            </Button>
          </Tooltip>
        </Stack>
      </Td>
    </Tr>
  )
}

ClientRow.propTypes = {
  client: PropTypes.object.isRequired
}

export default ClientRow
