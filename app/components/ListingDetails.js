import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ListingDetail = () => {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
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
		height: 200,
	},
	title: {
		fontSize: 20,
		marginBottom: 4,
	},
});

export default ListingDetail;
