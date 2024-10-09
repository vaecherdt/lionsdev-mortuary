import { Schema, model } from 'mongoose'; 

const vivoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento:{
        type: Date,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    telefone: {
        type: [ Number ],
        required: true
    }
});

export default model('Vivo', vivoSchema);