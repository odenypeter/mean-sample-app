import mongoose, { Schema, Document } from 'mongoose'

export interface ITodo extends Document {
  title: string
  description: string
  startDate: string
  endData: string
  status: string
}

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endData: Date,
  status: String,
}, { collection: 'todos'} )

export default mongoose.model<ITodo>('Todo', TodoSchema)
