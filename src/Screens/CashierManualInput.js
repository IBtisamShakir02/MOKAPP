//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CartBtn from './Components/CartBtn';
import {RFPercentage} from 'react-native-responsive-fontsize';
import KeyPad from './Components/KeyPad';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const CashierManualInput = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        <View style={styles.container}>
          <Text style={styles.V1txt}>Manual Input</Text>

        </View>

        <KeyPad />

        <View>
          <TouchableOpacity
            style={{
              marginTop: hp ('4%'),
              marginBottom: hp ('3%'),
            }}
          >
            <CartBtn
              text="(Count) Items     Total:(Bill)"
              IconName="shopping-cart"
              onPress={() => navigation.push ('PaymentMethod1')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    width: wp ('100%'),
    height: hp ('9%'),
    alignSelf: 'center',
    borderWidth: hp ('0.1%'),
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    marginBottom: hp ('1%'),
    elevation: 10,
  },
  V1txt: {
    color: 'black',
    fontSize: RFPercentage (3),
    textAlign: 'left',
    marginHorizontal: wp ('4.5%'),
    fontFamily: 'PTSerif-Regular',
  },
});

//make this component available to the app
export default CashierManualInput;
