const Trainer = require('../models/trainer');

module.exports = {
	index,
	new: newTrainer,
	create,
	show,
	delTrainer,
	edit,
	update,
};

function index(req, res) {
	Trainer.find({})
		.populate('user')
		.exec(function (err, trainers) {
			res.render('trainers/index', { title: 'All Trainers', trainers });
		});
}

function newTrainer(req, res) {
	res.render('trainers/new', { title: 'Add trainer' });
}

function create(req, res) {
	req.body.user = req.user._id;
	const trainer = new Trainer(req.body);
	trainer.save(function (err) {
		if (err) return res.redirect('/');
		res.redirect('/trainers');
	});
}

function show(req, res) {
	Trainer.findById(req.params.id, (err, trainer) => {
		res.render('trainers/show', { title: 'Details', trainer });
	});
}

function delTrainer(req, res) {
	console.log('working');
	Trainer.findOneAndDelete(
		{ _id: req.params.id, user: req.user._id },
		function (err) {
			res.redirect('/trainers');
		}
	);
}

function edit(req, res) {
	Trainer.findById(req.params.id, (err, trainer) => {
		res.render('trainers/edit', { title: 'edit trainer', trainer });
	});
}

function update(req, res) {
	Trainer.findOneAndUpdate(
		{ _id: req.params.id, user: req.user._id },
		req.body,
		{ new: true },
		function (err, trainer) {
			if (err || !trainer) return res.redirect('/trainers');
			res.redirect(`/trainers/${trainer._id}`);
		}
	);
}
