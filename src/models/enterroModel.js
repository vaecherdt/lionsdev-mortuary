import { Schema, model } from 'mongoose';

const enterroSchema = new Schema({
    data: {
        type: Date,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    vivo: {
        type: Schema.Types.ObjectId,
        ref: 'Vivo',
        required: true
    },
    morto: {
        type: Schema.Types.ObjectId,
        ref: 'Morto',
        required: true
    }
});

export default model('Enterro', enterroSchema);