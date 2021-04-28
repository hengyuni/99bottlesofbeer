const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>99 bottoles of beer on the wall<h1>" + "99 bottles of beer " + "<a href='http://localhost:3000/98'>take one down, pass it around</a>")
});

// app.get('/98', (req, res) => {
//   res.send(`<h1>98 bottles of beer on the wall</h1>`)
// });

app.get('/:number_of_bottles', (req, res) => {
  const number_of_bottles = parseInt(req.params.number_of_bottles)
  if (Number(req.params.number_of_bottles) <= 0) {
    res.send("<h1>how are you still alive???<h1>" + "<a href='/'>one more round!</a>")
  } else {
    res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall<h1> ${req.params.number_of_bottles} bottles of beer <a href='/${req.params.number_of_bottles - 1}'>take one down, pass it around</a>`)
  }
})






app.listen(port, () => console.log('I am listening on port: ', port))