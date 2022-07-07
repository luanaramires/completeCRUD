import express, { Express, Request, Response } from 'express';
import connection from './database/sequelize';
import bodyParser from 'body-parser';

import films from './app/controllers/FilmController';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/films', films);

app.get('/', (req:Request, res: Response) => {
    res.send('Hello world express + TS')
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});

connection();
