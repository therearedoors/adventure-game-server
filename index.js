const express = require('express')
const app = express()
const port = 3000
const state = ['\ud83e\udda2','\ud83c\udf5e']

app.get('/mainhall', (req, res) => {
  res.send(state)
})

app.delete('/mainhall/:id', (req, res) => {
    let payload;
    if (req.params.id === '1') {
        console.log('!!!')
        payload = state.pop()
    }
    res.send(res.payload)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})