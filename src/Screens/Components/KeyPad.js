//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  PixelRatio,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const KeyPad = ({CountBill}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  const [Value, setValue] = useState('');
  useEffect(() => {
    if (CountBill) {
      CountBill(Value);
    }
  }, [Value]);
  const handlePress = val => {
    if (val == 'C') {
      setValue('');
    } else if (val == 'Back') {
      setValue(Value.slice(0, -1));
    } else {
      setValue(Value + val);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Conta}>
        <Text style={[styles.ContaTxt, {fontSize: getFontSize(20)}]}>
          Input Price
        </Text>
        <View style={styles.ContField}>
          <Text style={[styles.Dollartxt, {fontSize: getFontSize(24)}]}>$</Text>
          <TextInput
            style={[styles.ContInput, {fontSize: getFontSize(24)}]}
            placeholder="28.00"
            placeholderTextColor={'#add8e6'}
            value={Value}
            keyboardType="number-pad"></TextInput>
        </View>
      </View>

      <View style={styles.calcont}>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('1')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('4')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('7')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('C')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              C
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('2')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('5')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('8')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('0')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              0
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('3')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('6')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            activeOpacity={0.8}
            onPress={() => handlePress('9')}>
            <Text style={[styles.calbtntxt, {fontSize: getFontSize(35)}]}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dotcont}
            activeOpacity={0.8}
            onPress={() => handlePress('.')}>
            <Text style={[styles.Dot, {fontSize: getFontSize(40)}]}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal2}>
          <TouchableOpacity
            style={styles.calbtn2}
            activeOpacity={0.8}
            onPress={() => handlePress('Back')}>
            <Feather name="delete" size={40} color={'#1A72DD'} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.calbtn2, {backgroundColor: '#1A72DD'}]}>
            <Text style={[styles.calbtntxt2, {fontSize: getFontSize(25)}]}>
              Enter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Conta: {
    backgroundColor: 'white',
    width: wp('97%'),
    height: hp('13%'),
    alignSelf: 'center',
    borderWidth: wp('0.1%'),
    borderRadius: hp('2%'),
    borderColor: '#d3d3d3',
    elevation: 5,
  },
  ContaTxt: {
    color: 'black',
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
    marginBottom: hp('1%'),
    fontWeight: '400',
  },
  ContField: {
    height: hp('6%'),
    width: wp('90%'),
    borderColor: '#2A3256',
    borderWidth: wp('0.1%'),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: wp('3%'),
  },
  Dollartxt: {
    color: '#1A72DD',
    fontWeight: '500',
    marginLeft: wp('5%'),
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  ContInput: {
    width: wp('84%'),
    height: hp('7%'),
    color: '#1A72DD',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: hp('0.2%'),
  },
  calcont: {
    height: hp('42%'),
    width: wp('99%'),
    borderRadius: wp('2%'),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp('0.3%'),
  },
  cal1: {
    height: hp('40%'),
    width: wp('23.4%'),
    margin: wp('0.2%'),
  },
  calbtn: {
    height: hp('9.3%'),
    width: wp('22.5%'),
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: wp('0.2%'),
    borderRadius: wp('4%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    marginLeft: hp('0.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  dotcont: {
    height: hp('9.3%'),
    width: wp('22.5%'),
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: wp('0.2%'),
    borderRadius: wp('4%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    marginLeft: hp('0.5%'),
    elevation: 10,
  },
  calbtntxt: {
    color: 'black',
    fontWeight: '400',
  },
  Dot: {
    color: 'black',
    fontWeight: '900',
    marginLeft: wp('10%'),
  },
  calbtn2: {
    height: hp('18.3%'),
    width: wp('25%'),
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderRadius: wp('3%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  cal2: {
    height: hp('39%'),
    width: wp('26.5%'),
    borderRadius: wp('2%'),
    margin: wp('0.3%'),
    marginTop: hp('1%'),
  },
  calbtntxt2: {
    color: 'white',
    fontWeight: '400',
  },
});

//make this component available to the app
export default KeyPad;
