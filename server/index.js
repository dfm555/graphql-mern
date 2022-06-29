import colors from 'colors' // eslint-disable-line
import dotenv from 'dotenv'

import app from './app.js'
import connectDB from './src/config/db.js'

dotenv.config()

/* Connecting to the database. */
connectDB().then(() => console.log('Connected to the database.'.green))

const port = process.env.PORT || 3001

app.listen(port)
console.log(`Server running on port ${port}`.green.underline)
