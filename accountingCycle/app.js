// const express = require('express');
// const mysql = require('mysql');
// const path = require('path');
// const bodyParser = require('body-parser');
// const port = process.env.PORT || 3000;
// const static_path = path.join(__dirname, '/views');
// // console.log(path.join(__dirname))

// const app = express()
// const router = express.Router()

// app.use(express.static(static_path));
// // app.use(express.urlencoded({ extended: false }));
// // app.use(express.json);
// // app.use(bodyParser.urlencoded({ extended: false }));

// //Creating Connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: ''
// });

// //Connect to MySQL
// db.connect(err => {
//     if (err) {
//         throw err;
//     };
//     console.log('MySQL Connected');
// });

//Create Database
app.get('/createdatabase', (req, res) => {
    let sql = 'CREATE DATABASE financialAccounting';
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Database Created');
    });
});

//Create Table
app.get('/createTables', (req, res) => {
    let sql = 'CREATE TABLE accounts (id int AUTO_INCREMENT, name VARCHAR(255), type VARCHAR(20), contact VARCHAR(20), email VARCHAR(255), address VARCHAR(255), about VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Accounts Table Created');
    });
    let sql2 = 'CREATE TABLE transactions (id int AUTO_INCREMENT, transactionDate DATE, debitAccounts VARCHAR(255), debitValues VARCHAR(255), creditAccounts VARCHAR(255), creditValues VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql2, err => {
        if (err) {
            throw err;
        }
        res.send('Transactions Table Created');
    });
})

// router.get('/', (req, res) => {
//     console.log("svsdvsdv", db);
//     res.send("<h1>Hello And Welcome</h1>");
//     // res.sendFile(path.join(static_path, '/index.html'))

// })

// app.get('/addTransaction', (req, res) => {
//     res.sendFile(path.join(static_path, '/public/manualAdd.html'))
// })

// app.get('/public/manualAdd.html', (req, res) => {
//     res.sendFile(path.join(static_path, '/public/manualAdd.html'))
// })

// app.get('/createAccountsRecords', (req, res) => {
//     let rec = { name: 'Office Rent', type: 'expense', contact: '+92-123-34567890', email: 'someone@abc.com', address: '1st Floor, ABC Building, Karachi', about: 'Have to Pay Amount till 5th of Every Month' }
//     let sql = 'INSERT INTO accounts set ?'
//     db.query(sql, rec, err => {
//         if (err) {
//             throw err;
//         }
//         res.send('Record Inserted');
//     });
// })


// app.post('/public/ledgerCreate', async(req, res) => {
//     try {
//         accName = req.body.name;
//         accType = req.body.type;
//         accContact = req.body.contact;
//         accEmail = req.body.email;
//         accAdd = req.body.address;
//         accAbout = req.body.about;
//         console.log(req.body)

//         let rec = { name: accName, type: accType, contact: accContact, email: accEmail, address: accAdd, about: accAbout }
//         let sql = 'INSERT INTO accounts set ?'
//         db.query(sql, rec, err => {
//             if (err) {
//                 throw err;
//             }
//             res.send('Record Inserted');
//         });
//         res.redirect('/')
//     } catch (err) {
//         res.sendStatus(400).send(err);
//     }
// })

// app.listen(port, () => {
//     console.log(`Server Started On Port ${port}`);
// });