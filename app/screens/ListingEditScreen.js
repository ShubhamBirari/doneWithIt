import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import CategoryPickerItem from '../components/CategoryPickerItem';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import AppPicker from './../components/AppPicker';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
});

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9,
	},
];

function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<Formik
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					setFieldTouched,
					errors,
					touched,
					setFieldValue,
					values,
				}) => (
					<>
						<AppTextInput
							maxLength={255}
							name='title'
							placeholder='Title'
							onBlur={() => setFieldTouched('title')}
							onChangeText={handleChange('title')}
						/>
						<ErrorMessage error={errors.title} visible={touched.title} />
						<AppTextInput
							keyboardType='numeric'
							maxLength={8}
							name='price'
							placeholder='Price'
							onBlur={() => setFieldTouched('price')}
							onChangeText={handleChange('price')}
							width={120}
						/>
						<ErrorMessage error={errors.price} visible={touched.price} />
						<AppPicker
							options={categories}
							name='category'
							numberOfColumns={3}
							onBlur={() => setFieldTouched('category')}
							onChangeText={handleChange('category')}
							PickerItemComponent={CategoryPickerItem}
							onSelectItem={(item) => setFieldValue('category', item)}
							placeholder='Category'
							selectedItem={values['category']}
							width='50%'
						/>
						<ErrorMessage error={errors.category} visible={touched.category} />
						<AppTextInput
							maxLength={255}
							multiline
							name='description'
							numberOfLines={3}
							onBlur={() => setFieldTouched('description')}
							onChangeText={handleChange('description')}
							placeholder='Description'
						/>
						<ErrorMessage
							error={errors.description}
							visible={touched.description}
						/>
						<AppButton title='Post' onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
export default ListingEditScreen;
