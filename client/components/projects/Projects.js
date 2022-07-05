import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'

import { GET_PROJECTS } from 'grahpql/queries/projectQueries'

import ProjectCard from './ProjectCard'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <div>Loading</div>
  if (error) return <div>{error}</div>
  return (
    <>
      {data.projects.length > 0 ? (
        <Box mt={10} mb={10} display={'flex'} gap={5} flexWrap={'wrap'}>
          {data.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      ) : (
        <div>No projects found</div>
      )}
    </>
  )
}

export default Projects
