import React, { useCallback, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { ADD_CLIENT } from 'grahpql/mutations/clientMutations'
import { GET_CLIENTS } from 'grahpql/queries/clientQueries'

const AddClientsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone
    },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS })
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] }
      })
    },
    onCompleted: () => {
      setName('')
      setEmail('')
      setPhone('')
      onClose() // Close the modal
    }
  })

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      default:
        break
    }
  }, [])

  const addClientFN = useCallback(async () => {
    if (name && email && phone) {
      await addClient(name, email, phone)
    } else {
      initialRef.current.focus()
    }
  }, [name, email, phone, onClose])

  return (
    <div>
      <Button leftIcon={<AddIcon />} onClick={onOpen} colorScheme={'facebook'}>
        Add Client
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name='name'
                ref={initialRef}
                placeholder='John Doe'
                value={name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name='email'
                type={'email'}
                placeholder='john.doe@test.com'
                value={email}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                name='phone'
                type={'phone'}
                placeholder='(123) 456-7890'
                value={phone}
                onChange={handleChange}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={addClientFN}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddClientsModal
