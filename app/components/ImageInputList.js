import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	const scrollView = useRef();
	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<ImageInput
							imageUri={uri}
							key={uri}
							style={styles.image}
							onChangeImage={() => onRemoveImage(uri)}
						/>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	image: {
		marginRight: 8,
	},
});

export default ImageInputList;
