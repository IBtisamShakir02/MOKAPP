import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HelloScreen = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{marginTop: hp('3%')}}>
        <Text style={[styles.welcometxt, {fontSize: getFontSize(70)}]}>
          MOKPOS
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: wp('98%'),
            height: hp('45%'),
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../Screens/assets/images/Hello.jpg')}
            style={{height: hp('45%'), width: wp('98%'), alignSelf: 'center'}}
          />
        </View>
        <Text style={[styles.smltxt, {fontSize: getFontSize(15)}]}>
          Easy Management for your Store.
        </Text>
        <View style={styles.recimgview}>
          <Image
            source={require('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp('2%'), marginLeft: wp('3')}}
          />
          <Image
            source={require('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp('2%'), marginLeft: wp('3')}}
          />
          <Image
            source={require('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp('2%'), marginLeft: wp('3')}}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            height: hp('20%'),
            width: wp('100%'),
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.8}>
            <CusButton
              text="SignUp"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('CreateAccount')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: hp('1.5%'),
            }}
            activeOpacity={0.8}>
            <CusButton
              text="Login"
              backgroundColor={'white'}
              color={'#1A72DD'}
              onPress={() => navigation.push('SignIn')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  welcometxt: {
    color: '#1A72DD',
    textAlign: 'center',
    marginTop: hp('8%'),
    marginBottom: hp('1%'),
    fontFamily: 'Rubik-Medium',
  },
  recimgview: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: wp('-5%'),
  },
  smltxt: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    marginTop: hp('1%'),
  },
  img: {
    width: wp('90%'),
    height: hp('50%'),
  },
});

export default HelloScreen;
