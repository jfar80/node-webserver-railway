
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port =process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use (express.static('public'));

app.get('/',(req, res)=> {
  res.render('home',{
    nombre: 'JFAR',
    titulo: 'curso de node',
    descripcion: 'Este es el curso de NODE JS',
  });
});
app.get('/generic',(req, res)=> {
  res.render('generic',{
    nombre: 'JFAR',
    titulo: 'curso de node',
    descripcion: 'Este es el curso de NODE JS',
  });
});
app.get('/elements',(req, res)=> {
  res.render('elements',{
    nombre: 'JFAR',
    titulo: 'curso de node',
    descripcion: 'Este es el curso de NODE JS',
  });
});



app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});
