import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import config from '../../config';
import {SliderBox} from "react-native-image-slider-box";
import EStyleSheet from "react-native-extended-stylesheet";
import {Text, Bold, MiddleText} from '../components/Texts';

const styles = EStyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: config.BackgroundColor
    },
    content: {
        padding: '20rem',
    },
    bold: {
        marginBottom: '5rem',
        marginTop: '30rem',
    },
    middle: {
        marginBottom: '11rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const BranchesScreen = props => {
    const branch = props.navigation.getParam('branch');

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
            <View style={styles.content}>
                <Bold style={styles.bold}>{branch.name}</Bold>
                <View style={styles.middle}>
                    <MiddleText>{branch.address}</MiddleText>
                    <MiddleText>{branch.time}</MiddleText>
                </View>
                <Text>{branch.about}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = state => ({
    branches: state.menu.branches,
});

export default connect(mapStateToProps, null)(BranchesScreen);
