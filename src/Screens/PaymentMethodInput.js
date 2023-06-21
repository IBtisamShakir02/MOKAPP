//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Wallet from 'react-native-vector-icons/Fontisto';
import KeyPad from './Components/KeyPad';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';
import NonCash from './Components/NonCash';

// create a component
const PaymentMethod1 = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [selectedTab, setSelectedTab] = useState(0);
  const [Count, setCount] = useState('');
  const CountBill = value => {
    setCount(value);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        text={'Payment Method'}
        onPress={() => navigation.push('CashManager')}
        iconname={'arrowleft'}
      />
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.Cont1}>
          <Text style={[styles.Cont1txt, {fontSize: getFontSize(19)}]}>
            Total Bill:
          </Text>
          <Text
            style={[
              styles.Cont1txt,
              {
                color: '#1A72DD',
                fontSize: getFontSize(25),
                fontFamily: 'Roboto-Medium',
              },
            ]}>
            ${Count ? Count : ''}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View
            style={[
              styles.Cont1,
              {
                height: hp('8%'),
                width: wp('49.5%'),
                alignSelf: 'flex-start',
                borderBottomColor: '#000080',
                borderBottomWidth: wp('0.8%'),
                justifyContent: 'center',
                elevation: 5,
                backgroundColor: selectedTab === 0 ? '#1A72DD' : 'white',
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                setSelectedTab(0);
              }}>
              <Text
                style={[
                  styles.Cont2txt,
                  {
                    fontSize: getFontSize(22),
                    color: selectedTab === 0 ? 'white' : 'black',
                  },
                ]}>
                Cash
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.Cont1,
              {
                height: hp('8%'),
                width: wp('49.5%'),
                alignSelf: 'flex-start',
                borderBottomColor: '#000080',
                borderBottomWidth: wp('0.8%'),
                justifyContent: 'center',
                elevation: 5,
                backgroundColor: selectedTab === 1 ? '#1A72DD' : 'white',
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                setSelectedTab(1);
              }}>
              <Text
                style={[
                  styles.Cont2txt,
                  {
                    fontSize: getFontSize(22),
                    color: selectedTab === 1 ? 'white' : 'black',
                  },
                ]}>
                Non-Cash
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Cont3}>
          <Wallet
            name="wallet"
            size={20}
            color={'black'}
            style={{alignSelf: 'center', marginStart: wp('29%')}}
          />
          <Text
            style={[
              styles.Cont2txt,
              {
                fontWeight: '400',
                marginLeft: wp('1.5%'),
                fontSize: getFontSize(22),
                marginTop: hp('0.3%'),
                color: 'black',
              },
            ]}>
            Exact Amount
          </Text>
        </View>
        <View style={styles.keypadcont}>
          {selectedTab === 0 ? <KeyPad CountBill={CountBill} /> : <NonCash />}
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Cont1: {
    backgroundColor: 'white',
    width: wp('99%'),
    height: hp('9%'),
    borderWidth: wp('0.2%'),
    borderColor: '#d3d3d3',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  Cont1txt: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
    marginHorizontal: wp('4%'),
  },
  Cont2txt: {
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  Cont3: {
    height: hp('8%'),
    width: wp('97%'),
    alignSelf: 'center',
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
    marginTop: hp('0.6%'),
    borderRadius: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },

  keypadcont: {
    width: wp('99%'),
    height: hp('64%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    marginTop: hp('0.7%'),
  },
});

//make this component available to the app
export default PaymentMethod1;
