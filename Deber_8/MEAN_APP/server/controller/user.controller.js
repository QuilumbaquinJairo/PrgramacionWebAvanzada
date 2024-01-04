const express = require('express');
const httpStatus = require('http-status-codes');
const router = express.Router();
const user = require('../models/user.model.js');

router.get('/', (req, res) => {
    user.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}).get('/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}).post('/', (req, res) => {
    const obj=req.body;
    user.create(obj).then(doc => {
        res.status(httpStatus.CREATED).send(doc);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}).put('/:id', (req, res) => {
    let id = req.params.id;
    const obj=req.body;
    user.findByIdAndUpdate(id,{name:obj.name,contact:obj.contact,address:obj.address}).
    then((doc) => {
        res.status(httpStatus.OK).send(doc);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    const obj=req.body;
    user.findByIdAndDelete(id).
    then((doc) => {
        res.status(httpStatus.OK).send();
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
});


module.exports = router;