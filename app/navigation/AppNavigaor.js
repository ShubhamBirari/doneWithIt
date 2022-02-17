const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from './../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from '../config/routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name={routes.FEED_TAB}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='home' color={color} size={size} />
					),
				}}
				component={FeedNavigator}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
				})}
				component={ListingEditScreen}
			/>
			<Tab.Screen
				name={routes.ACCOUNT_TAB}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='account' color={color} size={size} />
					),
				}}
				component={AccountNavigator}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
