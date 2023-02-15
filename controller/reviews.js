const trainer = require('../models/trainer');
const Trainer = require('../models/trainer');


module.exports = {
    create,
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