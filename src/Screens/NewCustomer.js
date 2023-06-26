import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  PixelRatio,
  Text,
} from 'react-native';
import Header from './Components/Header';
import CusButton from '../Screens/Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NewCustomer = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'New Customer'}
        iconname={'arrowleft'}
        onPress={() => navigation.push('Customer')}
      />
      <ScrollView>
        <View style={styles.MiddleCont}>
          <View style={styles.inputView}>
            <Text style={[styles.text, {fontSize: getFontSize(20)}]}>
              Name:
            </Text>
            <TextInput
              style={[styles.field, {fontSize: getFontSize(17)}]}
              placeholder="Enter Your Name"
              placeholderTextColor={'grey'}
            />
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
              Address:
            </Text>
            <TextInput
              style={[
                styles.field,
                {fontSize: getFontSize(17), height: hp('15%')},
              ]}
              placeholder="Enter Your Full Address"
              placeholderTextColor={'grey'}
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <View style={styles.btnView}>
            <CusButton
              text="Save"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  MiddleCont: {
    height: hp('91.5%'),
    width: wp('99%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputView: {
    height: hp('62%'),
    width: wp('99%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  text: {
    marginTop: hp('3%'),
    color: 'black',
    fontWeight: '400',
    marginHorizontal: wp('5%'),
  },

  field: {
    borderBottomColor: '#2A3256',
    borderBottomWidth: wp('0.2%'),
    borderRadius: wp('1%'),
    width: wp('80%'),
    marginTop: hp('0.8%'),
    backgroundColor: 'white',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('5%'),
    fontWeight: '400',
    alignSelf: 'center',
  },
  btnView: {
    height: hp('10%'),
    width: wp('90%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: hp('5%'),
  },
});

export default NewCustomer;
