import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../config/routes';

const menuItems = [
	{
		title: 'My listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
		screen: routes.LISTING,
	},
	{
		title: 'My messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
		screen: routes.MESSAGES,
	},
];

function AccountScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title='Mosh Hamedani '
					subtitle={'programmingwithmosh.com'}
					image={require('./../../assets/mosh.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.screen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem
				title={'Log out'}
				IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	screen: {
		backgroundColor: colors.light,
	},
});

export default AccountScreen;
