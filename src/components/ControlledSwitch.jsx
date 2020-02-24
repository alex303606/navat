import React, { Component } from 'react';
import { Switch } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default class ControlledSwitch extends Component {
	state = {
		value: this.props.value || false,
	};
	
	onValueChange = value => {
		this.setState({value});
		this.props.onValueChange && this.props.onValueChange(value);
	};
	
	render() {
		return (
			<NativeViewGestureHandler
				hitSlop={20}
				shouldCancelWhenOutside={false}
				shouldActivateOnStart
				disallowInterruption>
				<Switch
					{...this.props}
					value={this.state.value}
					onValueChange={this.onValueChange}
				/>
			</NativeViewGestureHandler>
		);
	}
}
