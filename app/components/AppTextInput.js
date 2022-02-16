import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/defaultStyles';
import Icon from './Icon';

function AppTextInput({ icon, ...props }) {
	return (
		<View style={styles.container}>
			{icon && <Icon name={icon} size={40} style={styles.icon} />}
			<TextInput {...props} style={[defaultStyles.text, styles.text]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		backgroundColor: colors.light,
		padding: 8,
		marginVertical: 10,
		borderRadius: 100,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppTextInput;
