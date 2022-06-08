const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, '../frontEnd');
// console.log(path.join(__dirname, '../frontEnd'))

const app = express()

app.use(express.static(static_path));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/', (req, res) => {
    res.sendFile(path.join(static_path, '/index.html'))
})

app.get('/public/ledger.html', (req, res) => {
    res.sendFile(path.join(static_path, '/public/ledger.html'))
})

app.get('/public/manualAdd.html', (req, res) => {
    res.sendFile(path.join(static_path, '/public/manualAdd.html'))
})

app.get('/createAccountsRecords', (req, res) => {
    let rec = { name: 'Office Rent', type: 'expense', contact: '+92-123-34567890', email: 'someone@abc.com', address: '1st Floor, ABC Building, Karachi', about: 'Have to Pay Amount till 5th of Every Month' }
    let sql = 'INSERT INTO accounts set ?'
    db.query(sql, rec, err => {
        if (err) {
            throw err;
        }
        res.send('Record Inserted');
    });
})


app.post('/public/ledgerCreate', async(req, res) => {
    try {
        accName = req.body.name;
        accType = req.body.type;
        accContact = req.body.contact;
        accEmail = req.body.email;
        accAdd = req.body.address;
        accAbout = req.body.about;
        console.log(req.body)

        let rec = { name: accName, type: accType, contact: accContact, email: accEmail, address: accAdd, about: accAbout }
        let sql = 'INSERT INTO accounts set ?'
        db.query(sql, rec, err => {
            if (err) {
                throw err;
            }
            res.send('Record Inserted');
        });
        res.redirect('/')
    } catch (err) {
        res.sendStatus(400).send(err);
    }
})

app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});