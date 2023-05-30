//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CartBtn from './Components/CartBtn';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const SpecialMenu = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#EBEEEE', flex: 1}}>
      <SafeAreaView>

        <View style={styles.Cont1}>
          <Text style={styles.Cont1txt}>Special Menu</Text>

        </View>
        <CartBtn
          text="(Count) Items     Total:(Bill)"
          IconName="shopping-cart"
          onPress={() => navigation.push ('')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  Cont1: {
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
  Cont1txt: {
    color: 'black',
    fontSize: RFPercentage (3),
    textAlign: 'left',
    marginHorizontal: hp ('2%'),
    fontFamily: 'PTSerif-Regular',
  },
});

//make this component available to the app
export default SpecialMenu;
