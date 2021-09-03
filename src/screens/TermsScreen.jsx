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
                    <Bold style={{marginBottom: 10}}>В Компании «Чайхана Нават» существуют следующие правила
                        доставки:</Bold>
                    <SampleText style={{marginBottom: 10}}>• Вы можете заказать доставку, как по телефону, так и
                        непосредственно на нашем сайте и в мобильном приложении.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Минимальный заказ - 250 сом в зоне обслуживания филиала.
                        Вне зоны обслуживания предусмотрена доплата в размере 20сом за километр. (границы зоны
                        обслуживания можно уточнить у оператора).</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Компания принимает наличные и безналичные
                        платежи.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Все наши блюда готовятся только после подтверждения
                        заказа.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Отсчет времени заказа идет после подтверждения оператором
                        call-centre.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Вы можете внести изменения в заказ или отказаться от него в
                        течении пяти минут с момента оформления заказа.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Мы не принимаем заказ у лиц, находящихся в состоянии явного
                        алкогольного или наркотического опьянения.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Мы не принимаем заказ у лиц, не достигших 16 лет. Заказ
                        оформляется при подтверждении родителям.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Если клиент просит заказ с другого филиала, время доставки
                        увеличивается, и Компания оставляет за собой право выбора ближайшего филиала для исполнения
                        доставки.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Если заказ на сумму от 2000 сом, то Компания обязана
                        получить предварительную оплату в размере 30% от стоимости заказа.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Без точных юридических адресов, к автобусным остановкам, к
                        пересечениям улиц , заказы не принимаются.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Компания не доставляет продукцию не входящую в ассортимент
                        меню.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Время доставки в зоне филиала осуществляется в течении 1
                        часа, в зависимости от дорожной ситуации или форс мажора.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Доставка еды «Чайханы Нават» осуществляется в специальных
                        термоустойчивых сумках.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• При заказе большого количества блюд, время уточнять у
                        оператора.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Компенсация за опоздания обговариваются
                        индивидуально.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Следует знать, что доставка в отдаленные части города и
                        труднодоступные может занять 1 часа и 20 минут и более.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• По приезду курьера, во избежание недоразумений, заказ нужно
                        проверить на соответствие качества.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Так же, Вы можете оставить свои пожелания и предложения по
                        номеру +996551631111. Администрация Компании сразу ознакомится с Вашими пожеланиями и
                        предложениями.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Если Вы решили написать жалобу, обязательно укажите номер
                        заказа и число, когда был сделан заказ.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Если Вам, что-то не привезли или привезли не то, и Вы
                        хотите компенсации, необходимо отложить заказ или часть заказа (не менее 80% от блюда),
                        связаться с оператором и сообщить о проблеме. В случае если Вы, обратились с жалобой к
                        оператору, но при этом съели заказ и не сможете его показать, компенсировать и обменять заказ
                        Компания не сможет. Отказ от сотрудничества В «черный список» клиента заносят по следующим
                        причинам:</SampleText>
                    <SampleText style={{marginBottom: 10}}>• При отказе подтвержденного заказа более 3-х раз. Клиент
                        заносится в черный список.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Безосновательный отказ от готового продукта.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Многократные повторяющиеся необоснованные жалобы на
                        качество и комплектацию заказа.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• Использование ненормативной лексики в адрес сотрудников
                        Компании.</SampleText>
                    <SampleText style={{marginBottom: 10}}>• При отсутствии клиента по указанному им адресу. При оплате
                        предыдущего отказанного заказа, Компания снимает Клиента с «черного списка».</SampleText>
                </ScrollView>
            </Shadow>
        </View>
    );
};

export default TermsScreen;
