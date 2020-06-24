import React, {Fragment} from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImageWithLoader from './ImageWithLoader';
import { Description, Label } from './Texts';
import Price from './Price';
import { translate } from '../localization/i18n';
import Button from './Button';

const styles = EStyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: '10rem',
        flex: 1,
    },
    image: {
        width: '155rem',
        marginRight: '18rem',
    },
    imageWithLoader: {
        width: '100%',
        height: '145rem',
    },
    info: {
        flexDirection: 'column',
        flex: 1,
    },
    infoTop: {
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
        marginBottom: '15rem',
    },
    buttonContainer: {
        width: '134rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '15rem',
    },
    smallButtonStyle: {
        width: '62rem',
    },
    buttonTextStyle: {
        fontSize: '14rem',
    },
    textStyle: {
        fontSize: '22rem',
        lineHeight: '30rem',
    },
    smallTextStyle: {
        fontSize: '13rem',
        lineHeight: '13rem',
        height: '13rem',
    },
    buttonStyle: {
        width: '104rem',
    },
    prices: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    $2: '2rem',
});
const Item = (props) => {
    const {item} = props;
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={props.onPress(item)}>
            <View style={styles.row}>
                <View style={styles.image}>
                    <ImageWithLoader
                        resizeMode='cover'
                        style={styles.imageWithLoader}
                        source={item.image}
                    />
                </View>
                <View style={styles.info}>
                    <View style={styles.infoTop}>
                        <Label numberOfLines={2} style={styles.title}>{item.title}</Label>
                        <Description numberOfLines={3}>{item.description}</Description>
                    </View>
                    <View style={styles.footer}>
                        {item.additionalItem ?
                            <Fragment>
                                <View style={styles.buttonContainer}>
                                    <Button
                                        textStyle={styles.buttonTextStyle}
                                        buttonStyle={styles.smallButtonStyle}
                                        onPress={props.addToBasket(item, item.additionalItem)}
                                        title={item.additionalItem.additionalTitle}
                                    />
                                    <Button
                                        textStyle={styles.buttonTextStyle}
                                        buttonStyle={styles.smallButtonStyle}
                                        onPress={props.addToBasket(item)}
                                        title={item.additionalTitle || translate('toBasket')}
                                    />
                                </View>
                                <View style={styles.prices}>
                                    <Price style={{marginBottom: styles.$2}} textStyle={styles.smallTextStyle}
                                           title={item.additionalItem.price}/>
                                    <Price textStyle={styles.textStyle} title={item.price}/>
                                </View>
                            </Fragment> :
                            <Fragment>
                                <Button
                                    textStyle={styles.buttonTextStyle}
                                    buttonStyle={styles.buttonStyle}
                                    onPress={props.addToBasket(item)}
                                    title={translate('toBasket')}
                                />
                                <Price textStyle={styles.textStyle} title={item.price}/>
                            </Fragment>
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Item;
