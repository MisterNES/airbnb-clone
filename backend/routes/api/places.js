const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models');

const router = express.Router();

const commentValidators = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Please type a comment before submitting")
]

router.get('/', asyncHandler(async function(req, res) {
    const places = await db.Place.findAll();
    return res.json(places);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const place = await db.Comment.findByPk(req.params.id);
    const comments = await db.Review.findAll({
      where: { placeId: req.params.id },
      order: [["createdAt", "DESC"]],
      include: db.User,
    })
    return res.json(place, comments);
  }));

  router.post('/:id', commentValidators, asyncHandler(async function(req, res) {
    const validatorErrors = validationResult(req);
    let errors = [];
    if (validatorErrors.isEmpty() && req.session.auth) {
      const userId = req.session.auth.user.id;
      const user = await db.User.findByPk(userId);
      const username = user.username;
      const placeId = parseInt(req.params.id);
      const comment = req.body.content;
      const rating = 0;
      await db.Review.create({ userId, placeId, rating, comment })
      const comments = await db.Comment.findAll({
        where: { gameId },
        order: [["createdAt", "DESC"]],
        include: db.User,
      });
      await res.json({ comments, username });
    } else if (req.session.auth) {
      errors = validatorErrors.array().map((error) => error.msg);
      await res.json({ errors })
    } else {
      errors = ["Please sign in to post a comment."];
      await res.json({ errors })
    }
  })
);

module.exports = router;
