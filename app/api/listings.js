import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const postListing = (data) => {
	return client.post(endpoint, data);
};

export default { getListings, postListing };
