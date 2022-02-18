const express = require('express')
let cors = require('cors');
const { apps } = require('firebase-admin');

const app = express()
apps.use(cors("*"));

const PORT = 4000;

app.get('/', (request, response) => {
    response.send("Heroku-clase-33")
    console.log("Test con Heroku");
})

app.listen(PORT, () => {
    console.log(`Server is Listening on port: http://localhost:${PORT}`)
})