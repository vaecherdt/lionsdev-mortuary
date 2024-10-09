// a execução do programa começa aqui

/*
importações: recomendo que vá importando conforme for usando para evitar
importações desnecessárias
*/
import express from 'express';
import connectDB from './config/db.js'
import vivosRouter from './routers/vivosRouter.js';
import mortosRouter from './routers/mortosRouter.js';
import enterroRouter from './routers/enterroRouter.js';

// conectar com o banco de dados
connectDB();

/*
configurar o express - não se esquecer do express.json() para poder receber
JSON no corpo da requisição
*/
const app = express();
app.use(express.json());

// roteadores responsaveis por redirecionar as requisições para os controladores
app.use('/vivos', vivosRouter);
app.use('/mortos', mortosRouter)
app.use('/enterro', enterroRouter)

// iniciar o servidor
app.listen(3000, () => console.log('Server running on port 3000'));

// não tem como colocar comentários no json, então ficou no campo description