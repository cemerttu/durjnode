require('dotenv').config();

const express = require('express')

const app = express()
app.use(express.json());

const hostname = '127.0.0.1';
const port = process.env.PORT;

app.get('/', (req, res) =>{
    res.send('Welcome to the GOMYCODE.');
});



app.listen(port, () => {
 console.log ('Server running at https://${hostname}:${port}/'); 
})




