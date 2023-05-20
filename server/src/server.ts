import 'dotenv/config';
import fastify from "fastify";
import jwt from '@fastify/jwt';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import $static from '@fastify/static';
import { resolve } from 'node:path';

import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from './routes/auth';
import { uploadRoutes } from './routes/upload';

const app = fastify();

app.register(cors, {
  origin: true,
})

app.register(multipart);

app.register($static, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(jwt, {
  secret: 'spacetime'
})

app.register(authRoutes);
app.register(uploadRoutes);
app.register(memoriesRoutes);

const port = 3333;

app.listen({
  port,
  host: '0.0.0.0'
}).then(() => {
  console.log(`Servidor NLW-SPACETIME rodando na porta http://localhost:${port}`)
})
