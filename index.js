const express = require('express')

const app = express()

const PORT = 4000;

app.get('/', (request, response) => {
    response.send("Heroku-clase-33")
})

app.listen(PORT, () => {
    console.log(`Server is Listening on port: http://localhost:${PORT}`)
})