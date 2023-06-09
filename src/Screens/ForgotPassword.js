//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';

// create a component
const ForgotPassword = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Recover'}
        onPress={() => navigation.push('LogInOwner')}
        iconname={'arrowleft'}
      />
      <View style={styles.container1}>
        <Text style={[styles.fstconttxt, {fontSize: getFontSize(19)}]}>
          An Email wiil be sent to Your Registered Email to Recover Your Account
          !
        </Text>
        <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
          Enter your Email:
        </Text>
        <TextInput
          style={[styles.field, {fontSize: getFontSize(17)}]}
          placeholder="Enter Your Email"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
        />
        <CusButton text="Send" backgroundColor={'#1A72DD'} color={'white'} />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    marginTop: hp('1%'),
    backgroundColor: 'white',
  },
  fstconttxt: {
    color: 'darkgreen',
    textAlign: 'center',
    fontWeight: '400',
    marginTop: hp('5%'),
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
  },
  text: {
    color: 'black',
    marginHorizontal: wp('6%'),
    marginTop: hp('6%'),
    color: 'black',
    fontWeight: '400',
  },

  field: {
    borderBottomColor: '#2A3256',
    borderBottomWidth: wp('0.2%'),
    borderRadius: wp('1%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    backgroundColor: 'white',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('5%'),
    fontWeight: '400',
    marginBottom: hp('5%'),
  },
});

//make this component available to the app
export default ForgotPassword;
