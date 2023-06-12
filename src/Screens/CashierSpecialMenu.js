//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, PixelRatio} from 'react-native';
import CartBtn from './Components/CartBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Components/Header';

// create a component
const SpecialMenu = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <ScrollView style={{backgroundColor: '#EBEEEE', flex: 1}}>
      <SafeAreaView>
        <Header
          text={'Cashier'}
          onPress={() => navigation.push('')}
          iconname={'menu-fold'}
        />
        <View style={styles.Cont1}>
          <Text style={[styles.Cont1txt, {fontSize: getFontSize(24)}]}>
            Special Menu
          </Text>
        </View>
        <View style={styles.middlecont}>
          <CartBtn
            text="(Count) Items     Total:(Bill)"
            IconName="shopping-cart"
            onPress={() => navigation.push('')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Cont1: {
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('9%'),
    alignSelf: 'center',
    borderWidth: hp('0.1%'),
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    marginBottom: hp('1%'),
    elevation: 10,
  },
  Cont1txt: {
    color: 'black',
    textAlign: 'left',
    marginHorizontal: hp('2%'),
    fontFamily: 'Rubik-Regular',
  },
  middlecont: {
    height: hp('73%'),
    width: wp('95%'),
    alignSelf: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default SpecialMenu;
