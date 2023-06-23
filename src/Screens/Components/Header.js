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
              marginTop: heightPercentageToDP('2.6%'),
              marginLeft: widthPercentageToDP('4%'),
            }}>
            {iconname ? (
              <Arrowleft name={iconname} size={22} color="white" />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.textview}>
          <Text style={[styles.txt, {fontSize: getFontSize(23)}]}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('100%'),
    backgroundColor: '#1A72DD',
    alignSelf: 'center',
  },
  txt: {
    fontWeight: '500',
    color: 'white',
    marginTop: heightPercentageToDP('1.7%'),
    textAlign: 'center',
  },
  textview: {
    backgroundColor: '#1A72DD',
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('70%'),
  },
  arrowview: {
    backgroundColor: '#1A72DD',
    height: heightPercentageToDP('8.3%'),
    width: widthPercentageToDP('14%'),
    marginStart: widthPercentageToDP('-15%'),
  },
});

export default Header;
