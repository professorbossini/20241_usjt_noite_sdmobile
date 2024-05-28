const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
//GET localhost:3000/livros (req, res)=>{}
app.get('/hello', (req, res) => {
  res.send('Hello!')
})

app.listen(
  3001, 
  () => console.log('Executando...')
)
