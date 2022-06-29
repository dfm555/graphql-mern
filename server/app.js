import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import dotenv from 'dotenv'

dotenv.config()

import schema from './src/schema/schema.js'

const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

export default app
