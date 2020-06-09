import 'reflect-metadata';
import {createConnection} from "typeorm";
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppError';

createConnection({
  type: "postgres",
  host: "3.220.242.1",
  port: 5432,
  username: "nps",
  password: process.env.POSTGRESS_PASSWORD,
  database: "nps",
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}).then(connection => {
  console.log('Conexão com banco bem sucedida');
}).catch(error => console.log(error));

const app = express();

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
