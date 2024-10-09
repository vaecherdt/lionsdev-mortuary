import Enterro from '../models/enterroModel.js';

export const store = async (req, res) => {
    try {
        const enterro = await Enterro.create(req.body);
        return res.status(201).json(enterro);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const enterros = await Enterro.find().exec();
        return res.status(200).json(enterros);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const enterro = await Enterro.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(enterro);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const enterro = await Enterro.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(enterro);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};