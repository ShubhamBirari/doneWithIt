import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name='close' color={'white'} size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name='trash-can-outline'
					color={'white'}
					size={35}
				/>
			</View>
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
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
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
