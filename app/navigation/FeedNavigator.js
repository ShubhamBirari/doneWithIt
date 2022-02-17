import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../config/routes';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

function FeedNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			mode='modal'
			initialRouteName={routes.LISTING}
		>
			<Stack.Screen name={routes.LISTING} component={ListingsScreen} />
			<Stack.Screen
				name={routes.LISTING_DETAIL}
				component={ListingDetailScreen}
			/>
		</Stack.Navigator>
	);
}

export default FeedNavigator;
