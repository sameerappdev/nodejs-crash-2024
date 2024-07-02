import { createUserHandler, getAllUsersHandler, getUserByIdHandler, jsonMiddleware, logger, notFoundHandler } from './handlers.js';
import { createServer } from "http";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Aayush" },
  { id: 2, name: "Rohit" },
  { id: 3, name: "Mohit" },
  { id: 4, name: "Jain" },
  { id: 5, name: "Vincent" },
];

const server = createServer((req, res) => {
    const next = () =>
      jsonMiddleware(req, res, () => {
        const route = `${req.url}:${req.method}`;
        switch (route) {
          case "/api/users:GET":
            getAllUsersHandler(req, res, users);
            break;
          case req.url.match(/\/api\/users\/([0-9]+)/)?.input + ":GET":
            getUserByIdHandler(req, res, users);
            break;
          case "/api/create-user:POST":
            createUserHandler(req, res, users);
            break;
          default:
            notFoundHandler(req, res);
            break;
        }
      });
  
    logger(req, res, next);
  });
  
  server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
  });
  