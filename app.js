const express = require('express')



// express app
const app = express();


// listen to request
app.listen(8000)

app.get('/', (req, res) => {
    // res.send('<p>Home page</p>')
    res.sendFile('./views/index.html', { root:  __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<p>About us page</p>')
    res.sendFile('./views/about.html', { root:  __dirname })
})

