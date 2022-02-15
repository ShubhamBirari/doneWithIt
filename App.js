import { useState } from 'react';

import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';

const options = [
	{
		name: 'category',
	},

	{
		name: 'category1',
	},

	{
		name: 'category2',
	},
];
export default function App() {
	const [value, setValue] = useState(options[0].name);
	return (
		<Screen>
			<AppPicker
				icon='apps'
				options={options}
				selectedItem={value}
				onSelectItem={(item) => {
					setValue(item);
				}}
			/>
		</Screen>
	);
}
