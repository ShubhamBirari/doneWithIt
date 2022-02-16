import Screen from './app/components/Screen';
import { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
	const [imageUris, setUri] = useState([]);

	const handleAdd = (uri) => {
		setUri([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setUri(imageUris.filter((item) => item !== uri));
	};

	return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	);
}
