import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  PixelRatio,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/AntDesign';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const Dropdown = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.front}>
        <Text style={[styles.textstyle, {fontSize: getFontSize('17')}]}>
          Branch
        </Text>
        <Icons name="down" color="black" size={17} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  front: {
    height: hp('5.5%'),
    width: wp('58%'),
    borderWidth: wp('0.1%'),
    borderColor: '#8e8e8e',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: wp('2%'),
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textstyle: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
});

export default Dropdown;
