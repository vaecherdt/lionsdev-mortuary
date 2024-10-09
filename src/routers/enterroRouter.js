import { Router } from 'express'; // importação do roteador
import {
    store,
    index,
    update,
    destroy
} from '../controllers/enterroController.js'; // importação das funções - lugar de função é no ... controller

const router = Router(); //instanciar o router

/*
definir os tipos de requisição que o roteador vai responder, e as funções
que ele vai chamar
*/
router.post('/', store);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router; // não esquecer de exportar o roteador