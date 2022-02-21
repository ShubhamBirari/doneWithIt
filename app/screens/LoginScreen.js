import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Image, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';

import authApi from './../api/auth';
import jwtDecode from 'jwt-decode';
import AuthContext from './../auth/context';
import storage from '../auth/storage';

function LoginScreen() {
	const [loginFailed, setLoginFailed] = useState(false);
	const { setUser } = useContext(AuthContext);

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required().label('Email'),
		password: Yup.string().min(4).required().label('Password'),
	});

	const onSubmit = async ({ email, password }) => {
		const response = await authApi.login(email, password);
		if (!response.ok) return setLoginFailed(true);

		setLoginFailed(false);
		const user = jwtDecode(response.data);
		setUser(user);
		storage.setToken(result.data);
	};

	return (
		<Screen style={styles.screen}>
			<Image
				source={require('./../../assets/logo-red.png')}
				resizeMode='contain'
				style={styles.logo}
			/>
			<ErrorMessage error={'Invalid email or password'} visible={loginFailed} />
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='email'
							placeholder='Email'
							onBlur={() => setFieldTouched('email')}
							onChangeText={handleChange('email')}
							keyboardType='email-address'
							textContentType='emailAddress'
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='lock'
							placeholder='Password'
							onBlur={() => setFieldTouched('password')}
							onChangeText={handleChange('password')}
							secureTextEntry
							textContentType='password'
						/>
						<ErrorMessage error={errors.password} visible={touched.password} />
						<AppButton title={'Login'} onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
	logo: {
		height: 70,
		width: 70,
		marginBottom: 30,
		marginTop: 50,
		alignSelf: 'center',
	},
	screen: {
		padding: 10,
	},
});

export default LoginScreen;
