const express = require('express');
const mysql = require('mysql');

const app = express();

// mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'secret',
  database: 'list-app'
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
  
// Tambahkan rute untuk halaman beranda
app.get('/',(req, res)=>{
  res.render('top.ejs')
});

app.get('/index',(req, res)=>{
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      // Teruskan object sebagai argument ke-2 res.render
      res.render('index.ejs', {items: results});
    }
  );
});
  
app.listen(3000);