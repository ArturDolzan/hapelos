const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('mimos/index.html' , { root : baseDir }))

const port = 4001

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))