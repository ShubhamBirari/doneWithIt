import { StyleSheet, StatusBar, Platform } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
	return <MessagesScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
