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

function AppPicker({
	icon,
	options,
	numberOfColumns = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width = '100%',
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsOpen(true)}>
				<View style={[styles.container, { width }]}>
					{icon && <Icon name={icon} size={40} style={styles.icon} />}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
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
					keyExtractor={(item) => item.value.toString()}
					numColumns={numberOfColumns}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							label={item.label}
							onPress={() => {
								setIsOpen(false);
								onSelectItem(item);
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
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 15,
		marginVertical: 10,
	},
	text: {
		flex: 1,
		textAlignVertical: 'center',
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: colors.medium,
		flex: 1,
	},
});

export default AppPicker;
