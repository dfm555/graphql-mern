import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from '@chakra-ui/react'

const ProjectCard = ({ project }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='md' flex={'33%'} p={'15px'}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'2xl'} as={'h3'}>
          {project.name}
        </Heading>
        <Box as={'button'} borderRadius='none' bg='gray.400' color='white' px={4} h={8}>
          View
        </Box>
      </Box>
      <Box>
        <Text mt={'5px'}>
          Status: <strong>{project.status}</strong>
        </Text>
      </Box>
    </Box>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectCard
