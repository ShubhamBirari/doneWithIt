import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

function Screen({ children, style }) {
	return <SafeAreaView style={[styles.root, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	root: {
		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
	},
});

export default Screen;
