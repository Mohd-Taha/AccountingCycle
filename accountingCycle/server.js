const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');

const app = express();
const static_path = path.join(__dirname, '/views');
app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json);

//Creating Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financialAccounting'
});

//Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    };
    console.log('MySQL Connected');
});

// //Create Database
// app.get('/createdatabase', (req, res) => {
//     let sql = 'CREATE DATABASE financialAccounting';
//     db.query(sql, err => {
//         if (err) {
//             throw err;
//         }
//         res.send('Database Created');
//     });
// });

// //Create Tables
// app.get('/createTables', (req, res) => {
//     let sql = 'CREATE TABLE accounts (id int AUTO_INCREMENT, name VARCHAR(255), type VARCHAR(20), contact VARCHAR(20), email VARCHAR(255), address VARCHAR(255), about VARCHAR(255), PRIMARY KEY(id))'
//     db.query(sql, err => {
//         if (err) {
//             throw err;
//         }
//         res.send('Accounts Table Created');
//     });
//     let sql2 = 'CREATE TABLE transactions (id int AUTO_INCREMENT, transactionDate DATE, debitAccounts VARCHAR(255), debitValues VARCHAR(255), creditAccounts VARCHAR(255), creditValues VARCHAR(255), PRIMARY KEY(id))'
//     db.query(sql2, err => {
//         if (err) {
//             throw err;
//         }
//         res.send('Transactions Table Created');
//     });
// })

app.listen(port, () => {
    console.log(`Server Started On Port ${port} ; http://localhost:${port}/`);
});


// API Routes:
app.get('/', (req, res) => {
    console.log("Index Page Route");
    res.sendFile('./index.html', { root: static_path });
})

app.get('/addTransaction', (req, res) => {
    console.log("Manual Add Transaction Page Route");
    res.sendFile('./public/manualAdd.html', { root: static_path });
})

app.get('/accounts', (req, res) => {
    console.log("Show Accounts Page Route");
    res.sendFile('./public/ledger.html', { root: static_path });
})

app.get('/journal', (req, res) => {
    console.log("General Journal Page Route");
    res.sendFile('./public/generalJournal.html', { root: static_path });
})

app.get('/unAdjustedTrial', (req, res) => {
    console.log("Un Adjusted TrialBalance Page Route");
    res.sendFile('./public/trialBalance.html', { root: static_path });
})

app.get('/accountLedger/:id', (req, res) => {
    console.log("Only Account Page Route");
    res.sendFile('./public/accountLedger.html', { root: static_path });
})


//Post Requests
app.post('/createAccount', async(req, res) => {
    try {
        accName = req.body.name;
        accType = req.body.type;
        accContact = req.body.contact;
        accEmail = req.body.email;
        accAdd = req.body.address;
        accAbout = req.body.about;

        let rec = { name: accName, type: accType, contact: accContact, email: accEmail, address: accAdd, about: accAbout };
        let sql = 'INSERT INTO accounts set ?'
        db.query(sql, rec, err => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted");
        });
        console.log(rec)
    } catch (err) {
        console.log("Error In Form Post Request\n", err);
        res.sendStatus(400).send(err);
    }
    res.redirect('/accounts');

})

app.post('/createTransaction', async(req, res) => {
    try {
        console.log(req.body);
        // accName = req.body.name;
        // accType = req.body.type;
        // accContact = req.body.contact;
        // accEmail = req.body.email;
        // accAdd = req.body.address;
        // accAbout = req.body.about;

        // let rec = { name: accName, type: accType, contact: accContact, email: accEmail, address: accAdd, about: accAbout };
        // let sql = 'INSERT INTO accounts set ?'
        // db.query(sql, rec, err => {
        //     if (err) {
        //         throw err;
        //     }
        //     console.log("Record Inserted");
        // });
        // console.log(rec)
    } catch (err) {
        console.log("Error In Form Post Request\n", err);
        res.sendStatus(400).send(err);
    }
    res.redirect('/addTransaction');

})



// Data APIs:
app.get('/allAccountsData', (req, res) => {
    var data;
    let sql = 'SELECT * FROM accounts;'
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Selected All');
        data = JSON.stringify(result)
        res.send(data);
    });
})

app.get('/checkConnection', (req, res) => {
    data = {
        database: db._connectCalled
    }
    res.send(JSON.stringify(data))
})