import 'reflect-metadata';
import {createConnection} from "typeorm";
import 'dotenv/config';
import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppError';

createConnection();

// createConnection({
//   type: "postgres",
//   host: 'zend.caed5pjln3xt.us-east-1.rds.amazonaws.com',
//   port: 5432,
//   username: 'nps',
//   password: 'Pesquisa@IGTI@NPS10',
//   database: "nps",
//   entities: ["./src/models/*.ts"],
//   migrations: ["./src/database/migrations/*.ts"],
//   cli: {
//     "migrationsDir": "./src/database/migrations"
//   }
// }).then(connection => {
//   console.log('Conexão com banco bem sucedida');
// }).catch(error => console.log(error));

const app = express();

var corsOptions = {
  origin: 'https://igti.instructure.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
