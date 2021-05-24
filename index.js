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

app.use(express.urlencoded({extended: false}));
  
// Tambahkan rute untuk halaman beranda
app.get('/',(req, res)=>{
  res.render('top.ejs')
});

app.get('/new',(req, res)=>{
  res.render('new.ejs')
});

app.get('/index', (req, res) => {
  connection.query(
     'SELECT * FROM items',
     (error, results) => {
       res.render('index.ejs', {items: results});
     }
   );
});

app.post('/create',(req, res)=>{
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
     res.redirect('/index')
    }
  );
});
  
app.listen(3000);