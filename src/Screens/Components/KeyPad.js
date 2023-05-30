//import liraries
import React, {Children, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const KeyPad = () => {
  const [Value, setValue] = useState ('');
  const handlePress = val => {
    if (val == 'C') {
      setValue ('');
    } else if (val == 'Back') {
      setValue (Value.slice (0, -1));
    } else {
      setValue (Value + val);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.Conta}>
        <Text style={styles.ContaTxt}>Input Price</Text>
        <View style={styles.ContField}>
          <Text style={styles.Dollartxt}>$</Text>
          <TextInput
            style={styles.ContInput}
            placeholder="28.00"
            placeholderTextColor={'#add8e6'}
          >
            {Value}
          </TextInput>
        </View>
      </View>

      <View style={styles.calcont}>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('1')}
          >
            <Text style={styles.calbtntxt}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('4')}
          >
            <Text style={styles.calbtntxt}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('7')}
          >
            <Text style={styles.calbtntxt}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('C')}
          >
            <Text style={styles.calbtntxt}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('2')}
          >
            <Text style={styles.calbtntxt}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('5')}
          >
            <Text style={styles.calbtntxt}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('8')}
          >
            <Text style={styles.calbtntxt}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('0')}
          >
            <Text style={styles.calbtntxt}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal1}>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('3')}
          >
            <Text style={styles.calbtntxt}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('6')}
          >
            <Text style={styles.calbtntxt}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('9')}
          >
            <Text style={styles.calbtntxt}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calbtn}
            onPress={() => handlePress ('.')}
          >
            <Text style={styles.Dot}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal2}>
          <TouchableOpacity
            style={styles.calbtn2}
            onPress={() => handlePress ('Back')}
          >
            <Feather name="delete" size={50} color={'#1A72DD'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.calbtn2, {backgroundColor: '#1A72DD'}]}
          >
            <Text style={styles.calbtntxt2}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  Conta: {
    backgroundColor: 'white',
    width: wp ('97%'),
    height: hp ('16%'),
    alignSelf: 'center',
    borderWidth: wp ('0.1%'),
    marginTop: hp ('0.5%'),
    borderRadius: hp ('2%'),
    borderColor: '#d3d3d3',
    elevation: 5,
  },
  ContaTxt: {
    color: 'black',
    marginTop: hp ('1.5%'),
    marginLeft: wp ('4%'),
    marginBottom: hp ('1%'),
    fontSize: RFPercentage (3),
    fontWeight: '400',
    fontFamily: 'PTSerif-Regular',
  },
  ContField: {
    height: hp ('7%'),
    width: wp ('90%'),
    borderColor: '#d3d3d3',
    borderWidth: wp ('0.1%'),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: wp ('3%'),
  },
  Dollartxt: {
    color: '#1A72DD',
    fontSize: RFPercentage (3.5),
    fontWeight: '500',
    marginLeft: wp ('5%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ContInput: {
    width: wp ('84%'),
    height: hp ('7%'),
    fontSize: RFPercentage (3),
    color: '#1A72DD',
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'PTSerif-Bold',
    marginTop: hp ('0.4%'),
  },
  calcont: {
    height: hp ('42%'),
    width: wp ('99.5%'),
    backgroundColor: '#EBEEEE',
    borderRadius: RFPercentage (2),
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginTop: hp ('0.3%'),
  },
  cal1: {
    height: hp ('40%'),
    width: wp ('23.4%'),
    borderRadius: RFPercentage (3),
    margin: RFPercentage (0.1),
  },
  calbtn: {
    height: hp ('9.3%'),
    width: wp ('22.5%'),
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: wp ('0.2%'),
    borderRadius: RFPercentage (1),
    alignSelf: 'center',
    margin: RFPercentage (0),
    marginTop: hp ('0.8%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  calbtntxt: {
    color: 'black',
    fontSize: RFPercentage (6),
    fontWeight: '300',
    fontFamily: 'PTSerif-Regular',
  },
  Dot: {
    color: 'black',
    fontSize: RFPercentage (5),
    fontWeight: '900',
    marginBottom: hp ('3%'),
  },
  calbtn2: {
    height: hp ('19.6%'),
    width: wp ('26%'),
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: RFPercentage (0.2),
    borderRadius: RFPercentage (1),
    alignSelf: 'center',
    marginTop: hp ('0.6%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  cal2: {
    height: hp ('40%'),
    width: wp ('26.5%'),
    borderRadius: RFPercentage (3),
    margin: RFPercentage (0.2),
  },
  calbtntxt2: {
    color: 'white',
    fontSize: RFPercentage (4),
    fontWeight: '500',
    fontFamily: 'PTSerif-Bold',
  },
});

//make this component available to the app
export default KeyPad;
