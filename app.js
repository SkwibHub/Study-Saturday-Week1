'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/", require("./route/students"));

/*
app.get("/", (req, res) => {
  res.redirect("/");
})
*/

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});