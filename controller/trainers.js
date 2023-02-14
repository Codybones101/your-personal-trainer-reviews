const Trainer = require('../models/trainer');

module.exports = {
    index,
    new: newTrainer,
    create,
}

function index(req, res) {
    const trainers = Trainer.find({}, function(err, trainers){
        res.render('trainers/index', { title: 'All trainers', trainers })
    })
}

function newTrainer(req, res) {
    res.render('trainers/new', { title: 'Add trainer' })
}

function create(req, res) {
    req.body.userTrainer = req.user._id;
    const trainer = new Trainer(req.body, req.body.userTrainer);
    trainer.save(function(err) {
        if(err) return res.redirect('/');
        res.redirect('/trainers');
    })};
    

