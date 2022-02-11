export const get = (endpoint) => (query) => {
	const url = `${endpoint}`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/sparql-results+json',
		},
		body: `query=${encodeURI(query)}`,
	});
};
