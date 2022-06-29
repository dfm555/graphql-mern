import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema({
  avatar: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
})

export default mongoose.model('Client', ClientSchema)
