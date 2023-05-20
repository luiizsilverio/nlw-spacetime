import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { extname, resolve } from "node:path";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline);

export async function uploadRoutes(app: FastifyInstance) {

  app.post('/upload', async (request, reply) => {
    const data = await request.file({
      limits: {
        fileSize: 5242880, // limita arquivos de até 5MB
      }
    });

    if (!data) {
      return reply.status(400).send();
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(data.mimetype);

    if (!isValidFileFormat) {
      return reply.status(400).send();
    }

    const fileId = randomUUID();
    const extension = extname(data.filename);
    const fileName = fileId.concat(extension);

    const stream = createWriteStream(
      resolve(__dirname, '../../uploads', fileName)
    )

    await pump(data.file, stream);

    const fullUrl = request.protocol.concat('://').concat(request.hostname);
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString();

    return { fileUrl };
  })

}

