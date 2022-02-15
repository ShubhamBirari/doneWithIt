import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from './../components/ListItemSeparator';
import ListItemDeleteAction from './../components/ListItemDeleteAction';

function MessagesScreen() {
	const [messages, setMessages] = useState([
		{
			id: 1,
			title: 'T1',
			description: 'D1',
			image: require('../../assets/mosh.jpg'),
		},
		{
			id: 2,
			title: 'T2',
			description: 'D2',
			image: require('../../assets/mosh.jpg'),
		},
	]);

	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (msg) => {
		setMessages(messages.filter((m) => m.id != msg.id));
	};

	return (
		<Screen>
			<GestureHandlerRootView>
				<FlatList
					data={messages}
					keyExtractor={(message) => message.id.toString()}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							subtitle={item.description}
							image={item.image}
							onPress={() => console.log('Message selected', item)}
							renderRightActions={() => (
								<ListItemDeleteAction onPress={() => handleDelete(item)} />
							)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
					refreshing={refreshing}
					onRefresh={() =>
						setMessages([
							{
								id: 2,
								title: 'T2',
								description: 'D2',
								image: require('../../assets/mosh.jpg'),
							},
						])
					}
				/>
			</GestureHandlerRootView>
		</Screen>
	);
}

export default MessagesScreen;
