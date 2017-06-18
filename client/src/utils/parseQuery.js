const parseQuery = query => {
	const str = query.substring(1);
	const arr = str.split('&');
	const obj = {};
	arr.forEach(q => {
		const tmp = q.split('=');
		obj[tmp[0]] = decodeURI(tmp[1]);
	});
	return obj;
}

export default parseQuery;
