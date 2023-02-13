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

// function create(req, res) {
//     const trainer = new Trainer(req.body);
//     trainer.userTrainer = req.use._id;
//     trainer.save(function(err) {
//         if(err) return return res.redirect('/trainers/home');
//         res.redirect(`/trainers/${trainer._id}`);
//     })
