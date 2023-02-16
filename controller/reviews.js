const Trainer = require('../models/trainer');

module.exports = {
	create,
	delete: deleteReview,
	// edit,
};

function create(req, res) {
	Trainer.findById(req.params.id, function (err, trainer) {
		req.body.user = req.user._id;
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
		trainer.reviews.push(req.body);
		trainer.save(function (err) {
			res.redirect(`/trainers/${trainer._id}`);
		});
	});
}

function deleteReview(req, res, next) {
	Trainer.findOne(
		{
			'reviews._id': req.params.id,
			'reviews.user': req.user._id,
		},
		function (err, trainer) {
			if (!trainer) return res.redirect(`/trainers/${trainer._id}`);
			trainer.reviews.remove(req.params.id);
			trainer.save(function () {
				res.redirect(`/trainers/${trainer._id}`);
			});
		}
	);
}

// function edit(req, res) {}
// Trainer.findOne({ 'trainers._id': req.params.id }, function (err, trainer) {
// 	const comment = trainer.reviews.id(req.params.id);
// 	res.render('trainers/edit', { comment });
// });
