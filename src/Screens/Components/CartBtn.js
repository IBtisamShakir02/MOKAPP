//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const CartBtn = ({text, onPress, IconName, Height}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.button}>
        <View style={{flexDirection: 'row'}}>
          {IconName ? (
            <Icon
              name={IconName}
              color="white"
              size={25}
              style={{
                marginHorizontal: wp('4%'),
                marginVertical: hp('-0.4%'),
              }}
            />
          ) : null}
          <Text style={[styles.buttonText, {fontSize: getFontSize(15)}]}>
            {' '}
            {text}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    height: hp('6%'),
    width: wp('75%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#1A72DD',
    elevation: 20,
  },
  buttonText: {
    flex: 1,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Rubik-Medium',
  },
});

//make this component available to the app
export default CartBtn;
