//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import Wicon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import Sicon from 'react-native-vector-icons/MaterialIcons';
import Cicon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';
// create a component
const LogInOwner = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const submit = () => {
    if (Email === 'Ibtisam' && Password === '000') {
      navigation.navigate('');
    } else {
      Alert.alert('Invalid Data');
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Header
        text={'Owner'}
        onPress={() => navigation.push('SignIn')}
        iconname={'arrowleft'}
      />
      <ScrollView>
        <View style={styles.fstcont}>
          <Text style={[styles.fstconttxt, {fontSize: getFontSize(20)}]}>
            Note: Must Fill all the Fields in order to Create your Account !
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
            Email or Phone Number:
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getFontSize(17)}]}
            placeholder="Enter Your Email"
            placeholderTextColor={'grey'}
            value={Email}
            onChangeText={data => setEmail(data)}
            keyboardType="email-address"
          />
          <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
            Password:
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getFontSize(17)}]}
            placeholder="Enter Your Password"
            placeholderTextColor={'grey'}
            value={Password}
            onChangeText={data => setPassword(data)}
            secureTextEntry
          />

          <Text style={[styles.otptxt, {fontSize: getFontSize(18)}]}>
            Send OTP:
          </Text>

          <View style={styles.btncont1}>
            <TouchableOpacity style={styles.emailbtn}>
              <Icon name="email" size={25} color="#1A72DD" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.wtsappbtn}>
              <Wicon name="whatsapp" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smsbtn}>
              <Sicon name="sms" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.callbtn}>
              <Cicon name="phone-call" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginTop: hp('5%'),
            }}>
            <CusButton
              text="LogIn"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => submit()}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.frgtpass, {fontSize: getFontSize(18)}]}
              onPress={() => navigation.push('ForgotPassword')}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: hp('1%'),
  },
  fstcont: {
    width: wp('90%'),
    height: hp('10%'),
    borderRadius: 5,
    borderColor: '#0000000D',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  fstconttxt: {
    color: 'darkgreen',
    textAlign: 'center',
    fontWeight: '400',
  },

  text: {
    color: 'black',
    marginHorizontal: wp('6%'),
    marginTop: hp('4%'),
    color: 'black',
    fontWeight: '400',
  },

  field: {
    borderBottomColor: '#2A3256',
    borderBottomWidth: wp('0.2%'),
    borderRadius: wp('2%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    backgroundColor: 'white',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('5%'),
    fontWeight: '400',
    elevation: 1,
  },
  otptxt: {
    color: 'black',
    margin: 25,
    marginBottom: hp('4%'),
    fontWeight: '400',
  },
  btncont1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailbtn: {
    backgroundColor: 'white',
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  wtsappbtn: {
    backgroundColor: 'limegreen',
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  smsbtn: {
    backgroundColor: '#1A72DD',
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  callbtn: {
    backgroundColor: 'lime',
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  frgtpass: {
    color: '#1A72DD',
    textAlign: 'center',
    marginTop: hp('1%'),
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});

//make this component available to the app
export default LogInOwner;
