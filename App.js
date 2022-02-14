import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			{/* <WelcomeScreen /> */}
			<Card
				title='Red jacket for sale'
				subtitle={'$1.00'}
				image={require('./assets/jacket.jpg')}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
