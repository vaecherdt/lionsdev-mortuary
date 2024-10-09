import { Router } from 'express';
import {
    store,
    index,
    update,
    destroy
} from '../controllers/vivosController.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;

// os mesmos comentários do enterroRouter servem para cá