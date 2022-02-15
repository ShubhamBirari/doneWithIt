import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const Button = ({ title, color = 'primary', onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginVertical: 10,
	},
	text: {
		color: colors.white,
		textTransform: 'uppercase',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default Button;
