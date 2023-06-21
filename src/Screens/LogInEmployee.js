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
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';

// create a component
const LogInEmployee = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [code, setcode] = useState('');
  const [password, setpassword] = useState('');

  const Submit = () => {
    if (code === 'Abc123' && password === '000') {
      navigation.navigate('CashManager');
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
        text={'Employee'}
        onPress={() => navigation.push('SignIn')}
        iconname={'arrowleft'}
      />
      <View style={styles.container}>
        <View
          style={{
            width: wp('80%'),
            height: hp('9%'),
            borderRadius: 5,
            backgroundColor: 'white',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'darkgreen',
              fontSize: getFontSize(20),
              textAlign: 'center',
              fontFamily: 'Roboto-Regular',
            }}>
            Note: Enter the Code generated by the Admin !
          </Text>
        </View>
        <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
          Cashier Code:
        </Text>
        <TextInput
          style={[styles.field, {fontSize: getFontSize(17)}]}
          placeholder="Enter Cashier Code"
          placeholderTextColor={'grey'}
          value={code}
          onChangeText={data => setcode(data)}
          keyboardType="name-phone-pad"
        />
        <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
          Password:
        </Text>
        <TextInput
          style={[styles.field, {fontSize: getFontSize(17)}]}
          placeholder="Enter Your Password"
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={data => setpassword(data)}
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            marginTop: hp('6%'),
          }}>
          <CusButton
            text="LogIn"
            backgroundColor={'#1A72DD'}
            color={'white'}
            onPress={Submit}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: hp('2%'),
    flex: 1,
  },

  text: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
    marginHorizontal: wp('7%'),
    marginTop: hp('3%'),
    color: 'black',
  },

  field: {
    borderBottomColor: '#2A3256',
    borderBottomWidth: wp('0.2%'),
    borderRadius: wp('2%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    backgroundColor: 'white',
    fontFamily: 'Roboto-Regular',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('5%'),
    elevation: 1,
  },
});

//make this component available to the app
export default LogInEmployee;
