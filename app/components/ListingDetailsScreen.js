import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

const ListingDetailScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require('../../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.subtitle}>$100</AppText>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					image={require('../../assets/mosh.jpg')}
					title='Mosh hamedani'
					subtitle='5 listing'
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 240,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		marginBottom: 4,
	},
	subtitle: {
		color: colors.secondary,
		fontWeight: '500',
		fontSize: 20,
		marginVertical: 4,
	},
	userContainer: {
		marginVertical: 20,
	},
});

export default ListingDetailScreen;
