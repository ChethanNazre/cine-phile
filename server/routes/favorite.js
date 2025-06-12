const express = require("express");
const { route } = require("./users");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.post("/favoriteNumber", (req, res) => {
//Find the number of favorites for a movie by movieId
  Favorite.find({ movieId: req.body.movieId }).exec((err, favorite) => {
    
    if (err) return res.status(400).send(err);


    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  }); 
});


router.post("/favorited", (req, res) => {
  //Find favorite information for a movie by userFrom and movieId inside the Favorite collection
  Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom }).exec((err, favorite) => {
    if (err) return res.status(400).send(err)
    //How can we know if this movie is already favorited by the user?
    let result = false;
    if (favorite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
    
  })

  });

router.post("/addToFavorite", (req, res) => {
//we need to save info about the movie and user to the Favorite collection
  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/removeFromFavorite", (req, res) => {
//we need to save info about the movie and user to the Favorite collection
 Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
  .exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc  });
  });
}
);

module.exports = router;
