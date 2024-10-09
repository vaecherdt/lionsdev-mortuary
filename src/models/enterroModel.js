import { Schema, model } from 'mongoose'; 

// criar o esquema, é a estrutura dos dados que serão inseridos no banco
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
        type: Schema.Types.ObjectId, // tipo de dado que o mongoose usa para referenciar um documento de outra coleção
        ref: 'Vivo',
        required: true
    },
    morto: {
        type: Schema.Types.ObjectId,
        ref: 'Morto',
        required: true
    }
});

// criando o modelo baseado no esquema, e exportando
export default model('Enterro', enterroSchema);