import express from "express";

import { getusers, addUser } from "./repositories/UserRepository";

const app = express();

app.get("/", (req, res) => {
  const users = getusers();

  return res.json({ users });
});

app.listen(3333);
