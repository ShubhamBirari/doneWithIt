import React from 'react';
import { Image, ImageBackground, View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../config/routes';

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../../assets/background.jpg')}
			style={styles.background}
			blurRadius={3}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					resizeMode='contain'
					source={require('../../assets/logo-red.png')}
				/>
				<Text style={styles.tagline}>Sell what you dont need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton
					title={'Login'}
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<AppButton
					color='secondary'
					title='Register'
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
	buttonContainer: {
		width: '100%',
		padding: 16,
	},
	logo: {
		height: 80,
		width: 80,
	},
	tagline: {
		marginTop: 16,
		fontSize: 24,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
	logoContainer: {
		alignItems: 'center',
		position: 'absolute',
		top: 70,
	},
});

export default WelcomeScreen;
