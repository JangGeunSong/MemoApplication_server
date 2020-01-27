import mongoose, { Schema, Document } from 'mongoose'

export interface MemoContext extends Document {
    title: string,
    description: string,
    background: string,
    _doc: MemoContext
}

const Memo: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
})

export default mongoose.model<MemoContext>('Memo', Memo)