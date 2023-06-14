//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  PixelRatio,
} from 'react-native';
import CartBtn from './Components/CartBtn';
import KeyPad from './Components/KeyPad';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';

// create a component
const CashierManualInput = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignSelf: 'center'}}>
        <Header
          text={'Cashier'}
          onPress={() => navigation.push('')}
          iconname={'menu-fold'}
        />
        <View style={styles.manualcont}>
          <Text style={[styles.V1txt, {fontSize: getFontSize(24)}]}>
            Manual Input
          </Text>
        </View>
        <View style={styles.keypadview}>
          <KeyPad />
        </View>
        <View style={styles.cartview}>
          <TouchableOpacity
            style={{
              marginTop: hp('1%'),
              marginBottom: hp('1%'),
            }}>
            <CartBtn
              text="(Count) Items     Total:(Bill)"
              IconName="shopping-cart"
              onPress={() => navigation.push('PaymentMethod1')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E3E3ED',
    flex: 1,
    alignSelf: 'center',
  },
  manualcont: {
    backgroundColor: 'white',
    height: hp('7%'),
    width: wp('99%'),
    alignSelf: 'center',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    borderColor: '#d3d3d3',
    marginTop: hp('0.8%'),
    elevation: 5,
  },
  V1txt: {
    color: 'black',
    textAlign: 'left',
    marginHorizontal: wp('4.5%'),
    fontFamily: 'Rubik-Regular',
  },
  cartview: {
    height: hp('14%'),
    width: wp('98%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keypadview: {
    height: hp('63%'),
    width: wp('99%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

//make this component available to the app
export default CashierManualInput;
