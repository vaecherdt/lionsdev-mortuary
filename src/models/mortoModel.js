import { Schema, model } from 'mongoose';

const mortoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    dataMorte: {
        type: Date,
        required: true
    },
    vivo: {
        type: Schema.Types.ObjectId,
        ref: 'Vivo',
        required: true
    }
});

export default model('Morto', mortoSchema);