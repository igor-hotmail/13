const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vasilievi:fU6KaKuMHKPOSphl@cluster0.nd2az9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const Cat = mongoose.model('Cat', { name: String });

app.use('/', express.static('public'));

app.get('/api/weather', (req, res) => {

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));

  res.json({
    'temperature': 30
  })
})

app.get('/api/log', async (req, res) => {

  let cats = await Cat.find()

  res.json(cats)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})