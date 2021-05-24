const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('hello.ejs');
});
  
// Tambahkan rute untuk halaman beranda
app.get('/top',(req, res)=>{
  res.render('top.ejs')
});

app.get('/index',(req, res)=>{
  res.render('index.ejs')
});
  
app.listen(3000);