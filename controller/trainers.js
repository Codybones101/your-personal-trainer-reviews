const Trainer = require('../models/trainer');

module.exports = {
    index,
    new: newTrainer,
}

function index(req, res) {
    const trainers = Trainer.find({}, function(err, trainers){
        res.render('trainers/index', {trainers})
    })
}

function newTrainer(req, res) {
    res.render('trainers/new')
}