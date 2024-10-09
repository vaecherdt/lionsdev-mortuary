import Vivo from '../models/vivoModel.js'; // importando o modelo - de onde vem as funções

export const store = async (req, res) => { // função para criar
    try {
        const vivo = await Vivo.create(req.body);
        return res.status(201).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => { //função de listar
    try {
        const vivos = await Vivo.find().exec(); //.exec() por que faz uma busca no banco
        return res.status(200).json(vivos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => { // função de atualizar
    try {
        const vivo = await Vivo.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => { // função de deletar
    try {
        const vivo = await Vivo.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};