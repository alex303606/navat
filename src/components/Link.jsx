import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Texts';
import config from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	textStyle: {
		color: config.MainColor,
	},
});

const Link = (props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={props.linkStyle}
			onPress={props.onPress}>
			<Text style={styles.textStyle}>{props.title}</Text>
		</TouchableOpacity>
	);
};

Link.propTypes = {
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	linkStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	textStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
};

export default Link;
