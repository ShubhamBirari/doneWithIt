import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon} />
			<View style={styles.deleteIcon} />
			<Image
				style={styles.image}
				source={require('../../assets/chair.jpg')}
				resizeMode='contain'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	closeIcon: {
		backgroundColor: colors.primary,
		width: 50,
		height: 50,
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
		backgroundColor: colors.secondary,
		width: 50,
		height: 50,
		position: 'absolute',
		top: 40,
		right: 30,
	},
	container: {
		backgroundColor: colors.black,
		height: '100%',
		width: '100%',
		flex: 1,
	},
	image: {
		height: '100%',
		width: '100%',
	},
});

export default ViewImageScreen;
