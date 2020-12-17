const express = require ('express'),

// database access using knex
const db = require('.../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then(accounts => {
        res.status(200).json(accounts);
    });
});

router.get('/:id',(req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .first()
    .then(account => {
        res.status(200).json(accounts);
    })
    .catch(err => {
        console.log(err);
        escape.status(500).json({ error: 'Failed to get the account.' })
    })
})

router.post('/', (req, res) => {
    // add account 
    const accountInfo = req.body;

    db('accounts')
    .insert(accountInfo)
    .then(newAcct => {
        res.status(201).json(newAcct);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Failed to post the account.' });
    });
});

router.put('/', (req, res) => {
    // update account
    const id = req.params.id;
    const changes = req.body;

    db('accounts')
    .where({ id })
    .update(changes)
    .then(update => {
        res.status(200).json(update);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Failed to update account.' });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
// delete an account
    db('accounts')
    .where({ id })
    .del()
    .then(deleted => {
       res.status(200).json(deleted);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Failed to delete the account.' });
    });
});
module.exports = router;