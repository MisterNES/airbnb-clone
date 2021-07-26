const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const places = await db.Place.findAll();
    return res.json(places);
}));

router.get('/:id', asyncHandler(async function(req, res) {
    const place = await Place(req.params.id);
    return res.json(place);
  }));

module.exports = router;
