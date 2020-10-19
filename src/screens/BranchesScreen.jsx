import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import config from '../../config';
import {SliderBox} from "react-native-image-slider-box";
import EStyleSheet from "react-native-extended-stylesheet";
import {Text} from '../components/Texts';

const styles = EStyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: config.BackgroundColor
    },
});

const BranchesScreen = props => {
    const branch = props.navigation.getParam('branch');
    console.log(branch);
    return (
        <View style={styles.page}>
            <SliderBox
                images={branch.images}
                autoplay
                resizeMode={'cover'}
                circleLoop
                disableOnPress={false}
                paginationBoxVerticalPadding={20}
                dotColor={config.MainColor}
                inactiveDotColor={config.GreyColor}
                ImageLoader={() => <View/>}
                imageLoadingColor={'transparent'}
            />
            <Text>{branch.name}</Text>
            <Text>{branch.address}</Text>
            <Text>{branch.time}</Text>
            <Text>{branch.about}</Text>
        </View>
    );
};

const mapStateToProps = state => ({
    branches: state.menu.branches,
});

export default connect(mapStateToProps, null)(BranchesScreen);
