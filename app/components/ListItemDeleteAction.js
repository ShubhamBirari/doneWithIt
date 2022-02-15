import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.root}>
				<MaterialCommunityIcons
					name='trash-can'
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	root: {
		width: 70,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ListItemDeleteAction;
