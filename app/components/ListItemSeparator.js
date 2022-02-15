import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSeparator() {
	return <View style={styles.root} />;
}

const styles = StyleSheet.create({
	root: {
		height: 1,
		backgroundColor: colors.light,
	},
});

export default ListItemSeparator;
