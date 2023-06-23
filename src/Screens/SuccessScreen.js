import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AnimatedLottieView from 'lottie-react-native';

const SuccessScreen = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toastcont}>
        <AnimatedLottieView
          style={{height: hp('20%')}}
          source={require('../Screens/assets/images/Transaction.json')}
          autoPlay={true}
        />
        <View style={styles.textcont}>
          <Text style={[styles.bluetxt, {fontSize: getFontSize(25)}]}>
            SuccessFul Transaction
          </Text>
        </View>
        <View style={styles.textcont2}>
          <Text
            numberOfLines={2}
            style={[styles.blacktxt, {fontSize: getFontSize(15)}]}>
            Note: Don't forget to give smile to Customers
          </Text>
        </View>
        <View
          style={[
            styles.cashtxt,
            {
              marginTop: hp('0.5s%'),
              borderBottomColor: 'white',
              borderBottomWidth: wp('0.2%'),
            },
          ]}>
          <Text style={[styles.whitetxt, {fontSize: getFontSize(18)}]}>
            Method Payment: CASH
          </Text>
        </View>
        <View style={styles.cashtxt}>
          <Text style={[styles.whitetxt, {fontSize: getFontSize(18)}]}>
            Money Changes: $17.02
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.contbtn,
            {
              marginTop: hp('2%'),
              borderColor: 'ligthgrey',
              borderWidth: wp('0.1%'),
            },
          ]}>
          <Text style={{fontSize: getFontSize(18), color: 'grey'}}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.contbtn,
            {marginTop: hp('0.5%'), backgroundColor: 'lightblue'},
          ]}>
          <Text style={{fontSize: getFontSize(18), color: '#1A72DD'}}>
            Send Reciept
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btncont}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            marginTop: hp('15%'),
            borderWidth: wp('0.5%'),
            borderColor: 'white',
            height: hp('6%'),
            width: wp('90%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp('1%'),
          }}>
          <Text
            style={{
              fontSize: getFontSize(20),
              color: 'white',
              fontWeight: '700',
            }}>
            Print Reciept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CashierManager')}
          activeOpacity={0.6}
          style={{
            marginTop: hp('0.5%'),
            borderWidth: wp('0.5%'),
            borderColor: 'white',
            height: hp('6%'),
            width: wp('90%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: wp('1%'),
          }}>
          <Text
            style={{
              fontSize: getFontSize(20),
              color: '#1A72DD',
              fontWeight: '700',
            }}>
            Next Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A72DD',
    paddingTop: hp('9%'),
  },
  toastcont: {
    backgroundColor: 'white',
    height: hp('60%'),
    width: wp('90%'),
    borderRadius: wp('3%'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  piccont: {
    backgroundColor: 'green',
    height: hp('18%'),
    width: wp('40%'),
  },
  textcont: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('4%'),
    width: wp('75%'),
  },
  textcont2: {
    backgroundColor: 'white',
    height: hp('5%'),
    width: wp('41%'),
  },
  bluetxt: {
    color: '#1A72DD',
    fontWeight: '600',
  },
  blacktxt: {
    color: 'black',
    fontWeight: '400',
  },
  cashtxt: {
    height: hp('5%'),
    width: wp('65%'),
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('1%'),
  },
  whitetxt: {
    color: 'white',
    fontWeight: '400',
  },
  contbtn: {
    height: hp('6%'),
    width: wp('65%'),
    borderRadius: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncont: {
    height: hp('28%'),
    width: wp('98%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SuccessScreen;
