const v = (param, type, message) => ({ param, type, message });
const isObjectId = str => /^[0-9a-fA-F]{24}$/.test(str);

exports.validate = v('name', 'string', 'Missing name');
exports.createCategory = [
	v('name', 'string', 'Missing name'),
	v('shortname', 'string', 'Missing shortname')	
]
exports.findCategory = v('shortname', 'string', 'Missing shortname');
exports.findClothes = (req, res, next) => {
	const { id } = req.query;
	if (!isObjectId(id)) {
		return res.json({
			error: 'Missing or invalid argument (id)'
		});
	}
	return next();
}
