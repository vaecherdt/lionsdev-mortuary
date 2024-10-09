import Morto from '../models/mortoModel.js';

export const store = async (req, res) => {
    try {
        const morto = await Morto.create(req.body);
        return res.status(201).json(morto);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const mortos = await Morto.find().exec();
        return res.status(200).json(mortos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const morto = await Morto.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(morto);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const morto = await Morto.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(morto);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};