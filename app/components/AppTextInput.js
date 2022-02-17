import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/defaultStyles';
import Icon from './Icon';

function AppTextInput({ icon, width = '100%', ...props }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<Icon
					name={icon}
					size={40}
					style={styles.icon}
					iconColor={colors.medium}
				/>
			)}
			<TextInput {...props} style={[defaultStyles.text, styles.text]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.light,
		padding: 10,
		marginVertical: 10,
		borderRadius: 25,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppTextInput;
