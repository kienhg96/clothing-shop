const express = require('express');
const router = express.Router();
const {
	createCategory,
	findCategory,
	getAllCategories
} = require('../controllers/category');
const {
	findClothes
} = require('../controllers/clothes');
const validator = require('../middlewares/validator');
const validations = require('../configs/validations');

router.get('/', (req, res) => {
	res.send('Welcome to api');
});

router.post('/validate', validator(validations.validate), (req, res) => {
	res.send('OK');
});

router.post('/createCategory', validator(validations.createCategory), createCategory);
router.get('/findCategory', validator(validations.findCategory, 'query'), findCategory);
router.get('/getAllCategories', getAllCategories);

router.get('/findClothes', validator(validations.findClothes), findClothes);

module.exports = router;
