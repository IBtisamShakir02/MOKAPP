import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PixelRatio,
} from 'react-native';
import Header from './Components/Header';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUp = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <SafeAreaView>
        <Header
          text={'SignUp'}
          onPress={() => navigation.push('Hello')}
          iconname={'arrowleft'}
        />
        <View
          style={{
            width: wp('90%'),
            height: hp('12%'),
            borderWidth: wp('0%'),
            borderRadius: 10,
            borderColor: '#0000000D',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp('1.5%'),
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: 'darkgreen',
              fontSize: getFontSize(20),
              textAlign: 'center',
              fontFamily: 'Roboto-Regular',
            }}>
            Note: Must Fill all the Fields in order to Create your Account !
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.fieldcont}>
            <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
              Email:
            </Text>

            <TextInput
              style={[styles.field, {fontSize: getFontSize(17)}]}
              placeholder="Enter Your Email"
              placeholderTextColor={'grey'}
              keyboardType="email-address"
            />

            <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
              Phone Number:
            </Text>
            <TextInput
              style={[styles.field, {fontSize: getFontSize(17)}]}
              placeholder="Enter Your Phone Number"
              placeholderTextColor={'grey'}
              keyboardType="phone-pad"
            />
            <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
              Password:
            </Text>
            <TextInput
              style={[styles.field, {fontSize: getFontSize(17)}]}
              placeholder="Enter Your Password"
              placeholderTextColor={'grey'}
              secureTextEntry
            />
          </View>
          <TouchableOpacity>
            <CusButton
              text="LogIn"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('SignIn')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('60%'),
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  text: {
    marginTop: hp('2%'),
    color: 'black',
    fontFamily: 'Roboto-Regular',
    marginHorizontal: wp('5%'),
  },

  field: {
    borderColor: 'white',
    borderRadius: 2,
    width: wp('80%'),
    marginTop: hp('0.8%'),
    backgroundColor: '#EBEEEE',
    color: '#2A3256',
    height: hp('5.5%'),
    paddingHorizontal: wp('5%'),
    fontFamily: 'Roboto-Regular',
    elevation: 5,
    alignSelf: 'center',
  },
  fieldcont: {
    height: hp('43%'),
    width: wp('95%'),
    backgroundColor: 'white',
  },
});

export default SignUp;
