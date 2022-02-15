import React, { useState } from 'react';
import {
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Button,
} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, options, selectedItem, onSelectItem }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsOpen(true)}>
				<View style={styles.container}>
					{icon && <Icon name={icon} size={40} style={styles.icon} />}
					<AppText style={[styles.text]}>{selectedItem}</AppText>
					<Icon name='chevron-down' />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={isOpen} animationType='slide'>
				<Button
					title='Close'
					IconComponent={<Icon name='close' />}
					onPress={() => setIsOpen(false)}
				/>
				<FlatList
					data={options}
					keyExtractor={(item) => item.name.toString()}
					renderItem={({ item }) => (
						<PickerItem
							label={item.name}
							onPress={() => {
								setIsOpen(false);
								onSelectItem(item.name);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		backgroundColor: colors.light,
		padding: 8,
		marginVertical: 10,
	},
	text: {
		flex: 1,
		textAlignVertical: 'center',
	},
	icon: {
		marginRight: 10,
	},
});

export default AppPicker;
