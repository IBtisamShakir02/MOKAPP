//import liraries
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.fstconttxt}>
          An Email wiil be sent to Your Registered Email to Recover Your Account !
        </Text>
        <Text style={styles.text}>
          Enter your Email:
        </Text>
        <TextInput
          style={styles.field}
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
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    marginTop: hp ('1%'),
  },
  fstconttxt: {
    color: 'darkgreen',
    fontSize: RFPercentage (2.3),
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
    marginTop: hp ('5%'),
    marginLeft: wp ('8%'),
    marginRight: wp ('8%'),
  },
  text: {
    fontSize: RFPercentage (2.7),
    color: 'black',
    marginHorizontal: wp ('6%'),
    marginTop: hp ('6%'),
    color: 'black',
    fontFamily: 'PTSerif-Bold',
  },

  field: {
    borderColor: 'white',
    borderRadius: 15,
    width: wp ('80%'),
    alignSelf: 'center',
    marginTop: hp ('2%'),
    backgroundColor: '#EBEEEE',
    color: '#2A3256',
    fontSize: RFPercentage (2.4),
    height: hp ('8%'),
    paddingHorizontal: wp ('5%'),
    fontFamily: 'PTSerif-Bold',
    elevation: 5,
    marginBottom: hp ('5%'),
  },
});

//make this component available to the app
export default ForgotPassword;
