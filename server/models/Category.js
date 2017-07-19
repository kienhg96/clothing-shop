const mongoose = require('../configs/mongoose');
const { Schema } = mongoose;

const CategorySchema = Schema({
	name: {
		type: String,
		required: true
	},
	shortname: {
		type: String,
		required: true,
		unique: true
	},
	clothesList: [{
		type: Schema.Types.ObjectId,
		ref: 'Clothes',
		default: []
	}]
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
