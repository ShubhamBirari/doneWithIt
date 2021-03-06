import React, { useEffect } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageUri, onChangeImage, style }) {
	useEffect(() => {
		ImagePicker.requestCameraPermissionsAsync();
	}, []);

	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('Delete', 'Are you sure you want to delete the image', [
				{
					text: 'Yes',
					onPress: () => onChangeImage(null),
				},
				{
					text: 'No',
				},
			]);
	};

	const selectImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log('Error reading an image', error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={[styles.container, style]}>
				{!imageUri && (
					<MaterialCommunityIcons
						name='camera'
						size={40}
						color={colors.medium}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
		height: 100,
		width: 100,
		borderRadius: 15,
		overflow: 'hidden',
	},
	image: {
		height: '100%',
		width: '100%',
	},
});

export default ImageInput;
