import React, {useState} from 'react';
import Header from './Components/Header';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  PixelRatio,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RightArrow from 'react-native-vector-icons/AntDesign';
import CusButton from './Components/CusButton';
import DelIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Order = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [isClicked, setIsClicked] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Order Details'}
        onPress={() => navigation.push('CashManager')}
        iconname={'arrowleft'}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.manualcont}
        onPress={() => navigation.push('Customer')}>
        <Text style={[styles.V1txt, {fontSize: getFontSize(20)}]}>
          Customer
        </Text>
        <RightArrow name="right" color={'black'} size={20} />
      </TouchableOpacity>
      <View style={styles.middlecont}>
        <View style={styles.productCont}>
          <View style={styles.ordrbtn}>
            <TouchableOpacity
              onPress={() => {
                setIsClicked(0);
              }}
              style={[
                styles.odrerBtns,
                {backgroundColor: isClicked === 0 ? '#1A72DD' : '#E3E3E3ED'},
              ]}>
              <Text
                style={[
                  styles.V1txt,
                  {
                    fontSize: getFontSize(17),
                    textAlign: 'center',
                    color: isClicked === 0 ? 'white' : 'black',
                  },
                ]}>
                Take Away
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsClicked(1);
              }}
              style={[
                styles.odrerBtns,
                {backgroundColor: isClicked === 1 ? '#1A72DD' : '#E3E3E3ED'},
              ]}>
              <Text
                style={[
                  styles.V1txt,
                  {
                    fontSize: getFontSize(17),
                    textAlign: 'center',
                    color: isClicked === 1 ? 'white' : 'black',
                  },
                ]}>
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsClicked(2);
              }}
              style={[
                styles.odrerBtns,
                {backgroundColor: isClicked === 2 ? '#1A72DD' : '#E3E3E3ED'},
              ]}>
              <Text
                style={[
                  styles.V1txt,
                  {
                    fontSize: getFontSize(17),
                    textAlign: 'center',
                    color: isClicked === 2 ? 'white' : 'black',
                  },
                ]}>
                Dine In
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollCont}>
            <View style={[styles.itemsCont, {marginTop: hp('1%')}]}>
              <View style={styles.itemCount}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: getFontSize(15),
                  }}>
                  12
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                Wagyu Black Pepper
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                $ 20.50
              </Text>
            </View>

            <View style={styles.itemsCont}>
              <View style={styles.itemCount}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: getFontSize(15),
                  }}>
                  7
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                Salad Tuna
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                $ 15.99
              </Text>
            </View>

            <View style={styles.itemsCont}>
              <View style={styles.itemCount}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: getFontSize(15),
                  }}>
                  2
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                Burger
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: getFontSize(18),
                }}>
                $ 03.15
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: hp('28%'),
            width: wp('97%'),
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.push('Discount')}
            activeOpacity={0.7}
            style={[
              styles.manualcont,
              {
                borderBottomColor: 'black',
                borderBottomWidth: wp('0.2%'),
                height: hp('5%'),
                width: wp('95%'),
              },
            ]}>
            <Text style={[styles.V1txt, {fontSize: getFontSize(20)}]}>
              Dicount
            </Text>
            <RightArrow name="right" color={'black'} size={20} />
          </TouchableOpacity>
          <View
            style={[
              styles.manualcont,
              {
                borderBottomColor: 'black',
                borderBottomWidth: wp('0.2%'),
                height: hp('5%'),
                width: wp('95%'),
              },
            ]}>
            <Text style={[styles.V1txt, {fontSize: getFontSize(20)}]}>
              SubTotal:
            </Text>
            <Text style={[styles.V1txt, {fontSize: getFontSize(20)}]}>
              $ 20.10
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.deltxt}>
            <DelIcon name="delete-outline" color={'red'} size={22} />
            <Text
              style={{
                color: 'red',
                fontWeight: '400',
                fontSize: getFontSize(18),
              }}>
              Delete Order
            </Text>
          </TouchableOpacity>
          <View style={styles.btnCont}>
            <CusButton
              text="Place Order"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('PaymentMethod1')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  manualcont: {
    backgroundColor: 'white',
    height: hp('7%'),
    width: wp('100%'),
    alignSelf: 'center',
    borderRadius: wp('1%'),
    justifyContent: 'space-between',
    borderColor: '#d3d3d3',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  V1txt: {
    color: 'black',
    textAlign: 'left',
    fontWeight: '400',
  },
  middlecont: {
    height: hp('84%'),
    width: wp('98%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  productCont: {
    height: hp('56%'),
    width: wp('98%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  btnCont: {
    backgroundColor: 'white',
    height: hp('8.5%'),
    width: wp('98%'),
    alignSelf: 'center',
    paddingTop: hp('0.5%'),
  },
  ordrbtn: {
    height: hp('8%'),
    width: wp('99%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: hp('0.5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    elevation: 5,
  },
  odrerBtns: {
    height: hp('5%'),
    width: wp('27%'),
    borderRadius: wp('6%'),
    justifyContent: 'center',
  },
  deltxt: {
    height: hp('4%'),
    width: wp('40%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollCont: {
    width: wp('97%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  itemsCont: {
    height: hp('6%'),
    width: wp('95%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomWidth: wp('0.2%'),
    borderBottomColor: 'black',
    alignItems: 'center',
    paddingLeft: wp('3%'),
    paddingRight: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCount: {
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: '#1A72DD',
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Order;
