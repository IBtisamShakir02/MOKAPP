import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Arrowleft from 'react-native-vector-icons/AntDesign';

const Header = ({text, onPress, iconname}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View style={styles.arrowview}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={onPress}
            style={{
              marginTop: heightPercentageToDP('2.3%'),
              marginLeft: widthPercentageToDP('3.5%'),
            }}>
            {iconname ? (
              <Arrowleft name={iconname} size={25} color="#1A72DD" />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.textview}>
          <Text style={[styles.txt, {fontSize: getFontSize(30)}]}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('100%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  txt: {
    fontFamily: 'Rubik-Medium',
    color: '#1A72DD',
    marginTop: heightPercentageToDP('1.5%'),
    textAlign: 'center',
  },
  textview: {
    backgroundColor: 'white',
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('70%'),
  },
  arrowview: {
    backgroundColor: 'white',
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('14%'),
    marginStart: widthPercentageToDP('-15%'),
  },
});

export default Header;
