require("dotenv").config()

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;
const APP_NAME = process.env.APP_NAME || "Node API";

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send(`Hello from my docker v2 ${APP_NAME} ci/cd from docker github actions ECR and then (ECS + Fargate)`);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running from docker and github action ECR and then (ECS + Fargate)",
  });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} Server running on port ${PORT}`);
});