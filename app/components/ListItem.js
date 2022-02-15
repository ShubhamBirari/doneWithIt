import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subtitle, image }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} resizeMode='cover' />
			<View style={styles.detailContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 20,
	},
	detailContainer: {},
	image: {
		width: 70,
		height: 70,
		borderRadius: 70,
		marginRight: 10,
	},
	subtitle: {
		color: colors.medium,
		fontSize: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 2,
	},
});

export default ListItem;
