const trainer = require('../models/trainer');
const Trainer = require('../models/trainer');


module.exports = {
    create,
    delete: deleteReview,
}

function deleteReview(req, res, next) {
    // Note the cool "dot" syntax to query for a movie with a
    // review nested within an array
    Trainer.findOne({
      'reviews._id': req.params.id,
      'reviews.user': req.user._id
    }).then(function(review) {
      if (!review) return res.redirect('/reviews');
      trainer.reviews.remove(req.params.id);
      trainer.save().then(function() {
        res.redirect(`/reviews/${review._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }

function create(req, res) {
    console.log(req.body)
   Trainer.findById(req.params.id, function(err, trainer) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    trainer.reviews.push(req.body)
    trainer.save(function(err) {
        res.redirect(`/trainers/${ trainer._id }`)
    })
   })
}

