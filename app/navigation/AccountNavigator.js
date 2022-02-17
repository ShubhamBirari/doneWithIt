import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../config/routes';
import AccountScreen from './../screens/AccountScreen';
import MessagesScreen from './../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

function AccountNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			mode='modal'
			initialRouteName={routes.ACCOUNT}
		>
			<Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
			<Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
		</Stack.Navigator>
	);
}

export default AccountNavigator;
