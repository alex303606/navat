import React from 'react';
import {ScrollView, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import {Bold, SampleText} from '../components/Texts';

const styles = EStyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: config.BackgroundColor,
        padding: '20rem',
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '20rem',
        paddingVertical: '25rem',
        borderRadius: '8rem',
    },
});

const TermsScreen = () => {
    return (
        <View style={styles.page}>
            <Shadow style={[styles.modal]}>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1}}
                >
                    <Bold style={{marginBottom: 10}}>ОФЕРТА</Bold>
                    <Bold style={{marginBottom: 10}}>УСЛОВИЯ ОПЛАТЫ</Bold>
                    <Bold style={{marginBottom: 10}}>
                        СОГЛАШЕНИЯ ОБ УСЛОВИЯХ ЭЛЕКТРОННОЙ ОПЛАТЫ ПО ПРОЖДАЖЕ ПРОДУКЦИИ УКАЗАННОЙ В ПРИЛОЖЕНИИ
                        SKYBERRY.KG
                    </Bold>
                    <SampleText style={{marginBottom: 10}}>
                        Настоящий документ «Соглашение об условиях электронной оплаты по продаже продукции указанной в
                        приложении SKYBERRY.KG, является публичной офертой ОсОО "Публика" адресованной физическим
                        лицам-заказчикам (далее «КЛИЕНТ») заключить настоящее соглашение на ниже изложенных условиях:
                    </SampleText>
                    <SampleText style={{marginBottom: 10}}>
                        Совершая действия по заказу / покупке / оплате продукции по доставке через приложение
                        SKYBERRY.KG «КЛИЕНТ» тем самым полностью принимает условия настоящего соглашения.

                        Для заказа доставки необходимых блюд «КЛИЕНТу» необходимо:

                        выбрать интересующие позиции, после выбора необходимо нажать кнопку «КУПИТЬ», после чего
                        выбранные позиции откладываются в «КОРЗИНУ»!
                        необходимо открыть корзину, проверить свой заказ и выбрать способ оплаты;
                        после выбора способа оплаты необходимо нажать кнопку «ОПЛАТИТЬ».

                        «ЧАЙХАНА NAVAT» не несет ответственности за:

                        действия и использования карт оплаты третьими лицами;
                        правильность введения при выборе блюд и формировании заказа в приложении SKYBERRY.KG;
                        за сбой интернет системы третьими лицами или погодными условиями (форс мажор) при формировании
                        заказа.

                        SKYBERRY.KG обязуется привести заказ в течении 90 минут с момента принятия заказа. В случае
                        непредвиденной задержки (форс-мажор, автомобильные пробки, аварии на дорогах) оператор кол
                        центра службы доставки от SKYBERRY.KG ОБЯЗАН созвониться с «КЛИЕНТОМ» и предупредить его о
                        задержке доставки заказа.

                        SKYBERRY.KG не несет ответственность за нарушение времени доставки заказа и температуру
                        доставляемых блюд!
                    </SampleText>
                    <SampleText style={{marginBottom: 10}}>
                        В случае несоответствия качества продукции (недовес, пережаренное, сырое, cухое,
                        несоответствующий внешний вид) SKYBERRY.KG обязуются «КЛИЕНТУ» заменить блюдо или вернуть
                        оплату, только наличными денежными средствами, не в зависимости от формы оплаты с стороны
                        «КЛИЕНТА».
                        Услуга банковских издержек закрепляется сторонами на основании договора между банком и
                        «КЛИЕНТОМ» и банком и SKYBERRY.KG.
                        Бесплатная доставка осуществляется только в черте города, при заказе на сумму не менее, чем 250
                        сом! За чертой города 1 км -50 сом.
                        Доставка производиться в одноразовых контейнерах, цена которых не входит в цену за блюдо.
                        Одноразовую посуду необходимо оплачивать отдельно:
                    </SampleText>
                    <SampleText style={{marginBottom: 20}}>
                        При заказе заказных и банкетных блюд украшения к блюду доставляются в отдельных  контейнерах.
                        При заказе любого вида заказного плова, стоимость за контейнер не взимается.
                        В случае некорректного обращения сотрудников SKYBERRY.KG обращаться по телефону +996227308888
                        Режим работы с 10.00 до 22.00
                    </SampleText>
                </ScrollView>
            </Shadow>
        </View>
    );
};

export default TermsScreen;
