import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';

import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';

function RegisterScreen() {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required().label('Name'),
		email: Yup.string().required().email().label('Email'),
		password: Yup.string().min(8).required().label('Password'),
	});

	return (
		<View style={styles.container}>
			<Image
				source={require('./../../assets/logo-red.png')}
				resizeMode='contain'
				style={styles.logo}
			/>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ handleChange, handleSubmit, touched, errors, setFieldTouched }) => (
					<>
						<AppTextInput
							icon='account'
							autoCapitalize='none'
							autoCorrect={false}
							placeholder='Name'
							onBlur={() => setFieldTouched('name')}
							onChangeText={handleChange('name')}
							textContentType='name'
						/>
						<ErrorMessage error={errors.name} visible={touched.name} />
						<AppTextInput
							icon='email'
							autoCapitalize='none'
							autoCorrect={false}
							placeholder='Email'
							onBlur={() => setFieldTouched('email')}
							onChangeText={handleChange('email')}
							keyboardType='email-address'
							textContentType='emailAddress'
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							icon='lock'
							autoCapitalize='none'
							autoCorrect={false}
							placeholder='Password'
							onBlur={() => setFieldTouched('password')}
							onChangeText={handleChange('password')}
							secureTextEntry
							textContentType='password'
						/>
						<ErrorMessage error={errors.password} visible={touched.password} />
						<AppButton title={'Register'} onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</View>
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
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
