import 'dotenv/config';
import fastify from "fastify";
import cors from '@fastify/cors';
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from './routes/auth';

const app = fastify();

app.register(cors, {
  origin: true,
})

app.register(authRoutes);
app.register(memoriesRoutes);

const port = 3333;

app.listen({
  port,
  host: '0.0.0.0'
}).then(() => {
  console.log(`Servidor NLW-SPACETIME rodando na porta http://localhost:${port}`)
})
