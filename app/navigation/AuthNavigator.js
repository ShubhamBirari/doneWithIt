import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../config/routes';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
			<Stack.Screen name={routes.LOGIN} component={LoginScreen} />
			{/* <Stack.Screen name={routes.REGISTER} component={Regis} /> */}
		</Stack.Navigator>
	);
}

export default AuthNavigator;
