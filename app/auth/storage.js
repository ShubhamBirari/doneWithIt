import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const setToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log('Error in storing auth token');
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error in getting auth token');
	}
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error in removing auth token');
	}
};

export default {
	getToken,
	removeToken,
	setToken,
};
