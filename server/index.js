const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql= require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "huda2626",
    database: "bookmanagement"
});

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM booksystem";
    db.query(sqlGet,(err,result)=>{
    res.send(result);
    }
    );
});

app.post("/api/post",(req,res)=>{
    const{UserName,BookName,BookAuthor, BookEdition,BookPublication} = req.body;
    const sqlInsert="INSERT INTO booksystem(UserName,BookName,BookAuthor,BookEdition,BookPublication) VALUES (?,?,?,?,?)";
    db.query(sqlInsert,[UserName,BookName,BookAuthor,BookEdition,BookPublication],
        (err,result)=>{
    if(err) {
        console.log(err);
    }
    });
});

app.delete("/delete/:book_id", (req, res) => {
    const book_id = req.params.book_id;
    db.query("DELETE FROM booksystem WHERE book_id = ?", book_id, (err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  });

app.get("/api/get/:book_id", (req,res)=>
{
    const{book_id} = req.params;
    const sqlGet="SELECT * FROM booksystem where book_id=?";
    db.query(sqlGet, book_id, (err,result)=>{
        if(err)
        {
            console.log(err);
        }
    res.send(result);
    });
});

app.put("/api/update/:book_id",(req,res)=>
{
    const{ book_id } = req.params;
    const{UserName, BookName, BookAuthor, BookEdition, BookPublication} = req.body;
    const sqlUpdate = "UPDATE booksystem SET UserName=?, BookName=?, BookAuthor=?, BookEdition=?, BookPublication=? WHERE book_id = ?";
    db.query(sqlUpdate,[UserName,BookName,BookAuthor,BookEdition,BookPublication, book_id] , (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.send(result);
    });
});

app.listen(5000,() => {
    console.log("Server is running");
})