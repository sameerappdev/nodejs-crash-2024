import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const users = [
  {
    id: 1,
    name: "Aayush",
  },
  {
    id: 2,
    name: "Rohit",
  },
  {
    id: 3,
    name: "Mohit",
  },
  {
    id: 4,
    name: "Jain",
  },
  {
    id: 5,
    name: "Vincent",
  },
];

// Middleware Logger
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next()
};

// API handler for GET /api/users
const getAllUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// API handler for GET /api/users/${id}
const getUserByIdHandler = (req, res) => {
  // Making condition to pass dynamic data within id
  const userID = req.url.split("/")[3];
  const user = users.find((u) => u.id === parseInt(userID));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User does not exist" }));
  }
  res.end();
};

// Handler for create user with POST method
const createUserHandler = (req, res) => {
  let body = ''
  // Listen data
  req.on('data', (resBody)=> {
    body += resBody.toString()
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.status = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  })
}


// Not Found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 400;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  const next = () =>
    jsonMiddleware(req, res, () => {
      const route = `${req.url}:${req.method}`;
      switch (route) {
        case "/api/users:GET":
          getAllUsersHandler(req, res);
          break;
        case req.url.match(/\/api\/users\/([0-9]+)/)?.input + ":GET":
          getUserByIdHandler(req, res);
          break;
        case "/api/create-user:POST":
          createUserHandler(req, res);
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
