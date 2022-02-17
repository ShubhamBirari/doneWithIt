import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import colors from '../config/colors';

const Card = ({ title, subtitle, image, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.root}>
				<Image source={image} resizeMode='cover' style={styles.image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{subtitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	root: {
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
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
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
