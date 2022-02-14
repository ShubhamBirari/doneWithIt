import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

const Card = ({ title, subtitle, image }) => {
	return (
		<View style={styles.root}>
			<Image source={image} resizeMode='cover' style={styles.image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 24,
		backgroundColor: '#f8f4f4',
		marginBottom: 16,
	},
	image: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
	},
	detailsContainer: {
		padding: 12,
		backgroundColor: colors.white,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		fontWeight: '500',
	},
	subtitle: {
		fontSize: 16,
		color: colors.secondary,
		fontWeight: '400',
	},
});

export default Card;
