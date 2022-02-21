import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../config/routes';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
	const {
		data: listings,
		error,
		loading,
		request: loadListings,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText>Could not retrieve list from the server</AppText>
					<AppButton onPress={loadListings} title='Retry' />
				</>
			)}
			<ActivityIndicator visible={loading} size='large' />
			<FlatList
				data={listings}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={'$' + item.price}
						imageUrl={{ uri: item.images[0].url }}
						onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
