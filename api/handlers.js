export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

export const getAllUsersHandler = (req, res, users) => {
  res.write(JSON.stringify(users));
  res.end();
};

export const getUserByIdHandler = (req, res, users) => {
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

export const createUserHandler = (req, res, users) => {
  let body = '';
  req.on('data', (resBody) => {
    body += resBody.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

export const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};
