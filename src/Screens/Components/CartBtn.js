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
const CartBtn = ({text, onPress, IconName, height}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.button, {height}]}>
        <View style={{flexDirection: 'row'}}>
          {IconName ? (
            <Icon
              name={IconName}
              color="white"
              size={20}
              style={{
                marginRight: wp('1%'),
                marginTop: hp('0.1%'),
              }}
            />
          ) : null}
          <Text style={[styles.buttonText, {fontSize: getFontSize(16)}]}>
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
    width: wp('93%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    backgroundColor: '#1A72DD',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight:'500',
  },
});

//make this component available to the app
export default CartBtn;
