import Vivo from '../models/vivoModel.js';

export const store = async (req, res) => {
    try {
        const vivo = await Vivo.create(req.body);
        return res.status(201).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const vivos = await Vivo.find().exec();
        return res.status(200).json(vivos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const vivo = await Vivo.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const vivo = await Vivo.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(vivo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};