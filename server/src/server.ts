import fastify from "fastify";
import cors from '@fastify/cors';
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes);

const port = 3333;

app.listen({
  port,
  host: '0.0.0.0'
}).then(() => {
  console.log(`Servidor NLW-SPACETIME rodando na porta http://localhost:${port}`)
})
