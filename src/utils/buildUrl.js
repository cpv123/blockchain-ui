export const baseUrl = "http://0.0.0.0:5000/";

const buildUrl = (path) => {
	return baseUrl + path;
};

export default buildUrl;