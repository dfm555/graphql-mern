const express = require('express')
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()
const connectDB = require('./config/db')
const schema = require('./schema/schema')

const port = process.env.PORT || 3001
const app = express()

/* Connecting to the database. */
connectDB().then().catch()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(port, () =>
  console.log(`Server running on port ${port}`.green.underline)
)
