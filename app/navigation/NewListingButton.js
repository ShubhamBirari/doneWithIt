import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='plus-circle'
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.primary,
		borderColor: colors.white,
		borderWidth: 8,
		justifyContent: 'center',
		height: 70,
		width: 70,
		borderRadius: 40,
		bottom: 20,
	},
});

export default NewListingButton;
