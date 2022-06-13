const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');

const app = express();
const static_path = path.join(__dirname, '/views');
// app.use(express.static_path);
app.use('/', express.static('views'));

app.listen(port, () => {
    console.log(`Server Started On Port ${port} ; http://localhost:${port}/`);
});

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