import dotenv from 'dotenv';

import express from 'express';
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const port = process.env.PORT;


// TODO: require('hbs);
app.set('view engine', 'hbs');

// Servir Contenido Estatico
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home', {nombre: 'Ivan', titulo: 'chamuskado'});
  })

//   app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html')
//   })

//   app.get('/elements', function (req, res) {
//     res.sendFile(__dirname + '/public/elements.html')
//   })

// app.get('*', function (req, res) {
//     res.send('404 | page not found')
//   })
  

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})