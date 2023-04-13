const mysql = require('mysql2');
const util = require('util');

//Sets Connection to SQL Server
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "convergence"
});

//Creates User Table
function CreateUserTable(year){
    conn.query(`CREATE TABLE Users (
        ID int NOT NULL,
        Username TEXT,
        Password TEXT,
        StudentID VARCHAR(255)
    )`)
}

//Create Database **Only Used At Launch!!**
function CreateDatabase(){
    conn.query("CREATE DATABASE Suite", function(err){
        if (err){
            console.error(err);
        }
    });
}


module.exports = {conn, CreateDatabase, CreateUserTable};