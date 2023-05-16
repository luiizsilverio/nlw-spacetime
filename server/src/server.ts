import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

const port = 3333;

app.get('/users', async () => {
    const users = await prisma.user.findMany();
    return users;
})

app.listen({ 
    port, 
    host: '0.0.0.0' 
}).then(() => {
    console.log(`Servidor NLW-SPACETIME rodando na porta http://localhost:${port}`)
})
