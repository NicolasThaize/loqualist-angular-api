const express = require('express')
const bodyParser = require('body-parser')
const { Brand } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS

const port = 3000
app.listen(port, '127.0.0.1', () => {
  console.log(`Running on http://localhost:${port}`)
})


app.get('/api/brands', (req, res) => {
  return Brand.findAll().then(brand => res.json(brand))
})

app.get('/api/brands/:id?', (req, res) => {
  if(req.params.id) {
    Brand.findOne({
      where: {id: req.params.id}
    }).then(brand => {
      if (!brand){
        res.status(404)
        return res.send('no brand with this id')
      }
      return res.json(brand)
    })
  }
})


app.post('/api/brands', async(req, res) => {
  const body = req.body
  const brand = await Brand.create({
    name: body.name,
    description: body.description
  }).catch(e => {
    res.status(400)
    return res.json(e)
  })
  return res.json(brand)
})

app.put('/api/brands/:id?', async(req, res) => {
  const body = req.body
  if(req.params.id) {
    Brand.findOne({
      where: {id: req.params.id}
    }).then(brand => {
      if (!brand){
        res.status(404)
        return res.send('no brand with this id')
      }
      brand.update({
        name: body.name,
        description: body.description
      }).catch(e => {
        res.status(400)
        res.json(e)
      })
      return res.json(brand)
    })
  }
})
