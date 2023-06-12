//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const CusButton = ({
  text,
  onPress,
  IconName,
  backgroundColor,
  color,
  marginTop,
}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{marginTop}}>
        <View style={[styles.button, {backgroundColor}]}>
          <View style={{flexDirection: 'row'}}>
            {IconName ? (
              <Icon
                name={IconName}
                color="white"
                size={20}
                style={{
                  position: 'absolute',
                  marginHorizontal: wp('5%'),
                }}
              />
            ) : null}
            <Text
              style={[styles.buttonText, {color, fontSize: getFontSize(20)}]}>
              {' '}
              {text}{' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    height: hp('7%'),
    width: wp('80%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '',
    elevation: 10,
  },
  buttonText: {
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
  },
});

//make this component available to the app
export default CusButton;
