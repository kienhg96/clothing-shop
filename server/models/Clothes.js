const mongoose = require('../configs/mongoose');
const { Schema } = mongoose;

const ClothesSchema = Schema({
	name: {
		type: String,
		required: true
	},
	producer: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	size: {
		type: [String],
		required: true
	},
	color: {
		type: [String],
		required: true
	},
	thumb: {
		type: String,
		required: true
	},
	images: {
		type: [String],
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	}
});

const Clothes = mongoose.model('Clothes', ClothesSchema);
module.exports = Clothes;
