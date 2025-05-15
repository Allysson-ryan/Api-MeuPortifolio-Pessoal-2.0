import { createServer, IncomingMessage, ServerResponse, Server } from "http";
import app from "../src/app";

let server: Server<typeof IncomingMessage, typeof ServerResponse> | undefined;

export default function handler(req: IncomingMessage, res: ServerResponse) {
  if (!server) {
    server = createServer((req, res) => {
      app(req, res);
    });
  }

  return server.emit("request", req, res);
}
