const port = process.env.PORT || 3000;
const express = require('express');
const grogetter = require('grogetter-sdk');

//TODO:connect to api platform using heroku
app.get("/", (req, res) => {
    res.send("Hello World"); //change
});

app.listen(port, () => {
  console.warn(`App listening on http://localhost:${port}`);
});

//creating env variables
let SWE22 = new grogetter.SWE22({
  accessKeyId: process.env.SWE22_KEY,
  secretAccessKey: process.env.SWE22_SECRET
});
