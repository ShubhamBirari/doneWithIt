import { useState } from 'react';

export default useApi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...props) => {
		setLoading(true);
		const response = await apiFunc(...props);
		setLoading(false);

		if (!response.ok) return setError(false);

		setError(false);
		setData(response.data);
	};

	return { data, error, loading, request };
};
