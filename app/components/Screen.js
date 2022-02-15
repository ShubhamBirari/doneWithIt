import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

function Screen({ children }) {
	return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	root: {
		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
	},
});

export default Screen;