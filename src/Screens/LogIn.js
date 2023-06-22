//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';
// create a component
const LogIn = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <Header
          text={'LogIn'}
          onPress={() => navigation.push('Hello')}
          iconname={'arrowleft'}
        />
        <View style={styles.fstcont}>
          <Text style={[styles.cont1txt, {fontSize: getFontSize(35)}]}>
            Welcome to MOKPOS!
          </Text>
        </View>
        <View style={styles.scndtxtcont}>
          <Text
            style={{
              color: 'black',
              fontSize: getFontSize(19),
              fontWeight: '400',
            }}>
            Select Login as Owner or as Employee to Continue.
          </Text>
        </View>
        <View style={styles.scndcont}>
          <Image
            source={require('../Screens/assets/images/signin.jpg')}
            style={{
              width: wp('120%'),
              height: hp('42%'),
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={styles.thrdcont}>
          <TouchableOpacity
            style={{
              marginTop: hp('1%'),
              marginBottom: hp('1%'),
              marginLeft: wp('25%'),
              width: wp('50%'),
              height: hp('6.5%'),
            }}>
            <CusButton
              text="OWNER"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('LogInOwner')}
              IconName="user"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: getFontSize(18),
              marginBottom: hp('0.3%'),
              fontWeight: '400',
            }}>
            or
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: wp('25%'),
              width: wp('50%'),
              height: hp('6.5%'),
            }}>
            <CusButton
              text="Employee"
              backgroundColor={'green'}
              color={'white'}
              onPress={() => navigation.push('LoginEmp')}
              IconName="user"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.forthcont}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: getFontSize(17),
              fontWeight: '400',
            }}>
            Don't have an Account?
          </Text>

          <TouchableOpacity>
            <Text
              onPress={() => navigation.push('SignUp')}
              style={{
                color: '#1A72DD',
                textAlign: 'center',
                fontSize: getFontSize(20),
                textDecorationLine: 'underline',
                fontWeight: '500',
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  cont1txt: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: '500',
  },
  fstcont: {
    height: hp('5.5%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: hp('3%'),
  },
  scndtxtcont: {
    height: hp('6%'),
    width: wp('55%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  scndcont: {
    backgroundColor: 'white',
    height: hp('43%'),
    width: wp('98%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thrdcont: {
    backgroundColor: 'white',
    height: hp('20%'),
    width: wp('100%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  forthcont: {
    backgroundColor: 'white',
    height: hp('8%'),
    width: wp('95%'),
    alignSelf: 'center',
  },
});
//make this component available to the app
export default LogIn;
