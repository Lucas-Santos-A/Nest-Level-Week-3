import express from 'express';
import path from 'path';
import 'express-async-errors'

import routes from './routes';
import cors from 'cors'

import './database/connection'
import errorHandler from './errors/handler';

//Query params para busca, filtro e paginação /users?search=diego
//Route Params identificar recurso, /users/1
//Body: Grande quantidade de informações para registrar alguem por exemplo /users

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);