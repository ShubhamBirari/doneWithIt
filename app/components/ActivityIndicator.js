import React from 'react';
import { ActivityIndicator as Indicator } from 'react-native';
import colors from '../config/colors';

function ActivityIndicator({ visible = false }) {
	return <Indicator animating={visible} size='large' color={colors.primary} />;
}

export default ActivityIndicator;
