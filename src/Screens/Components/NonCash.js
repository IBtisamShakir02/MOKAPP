import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CusButton from './CusButton';

const NonCash = () => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cont}>
        <Text style={[styles.txt, {fontSize: getFontSize(22)}]}>E-Wallet</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/Samsung.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cont}>
        <Text style={[styles.txt, {fontSize: getFontSize(22)}]}>Bank</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/meezan.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/hbl.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Image
              style={styles.img}
              source={require('../assets/images/Alfalah.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btncont}>
        <CusButton text="Enter" backgroundColor={'#1A72DD'} color={'white'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('63%'),
    width: wp('97%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    margin: wp('2%'),
    borderRadius: wp('3%'),
    elevation: 5,
  },
  cont: {
    height: hp('22%'),
    width: wp('90%'),
    backgroundColor: '#E3E3E3ED',
    alignSelf: 'center',
    borderRadius: wp('3%'),
    marginTop: hp('2.5%'),
    elevation: 2,
  },
  txt: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  press: {
    height: hp('11%'),
    width: wp('26.5%'),
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    marginLeft: wp('2.6%'),
    marginTop: hp('2%'),
  },
  img: {
    height: hp('10%'),
    width: wp('24%'),
    margin: wp('1%'),
  },
  btncont: {
    height: hp('11%'),
    width: wp('95%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    marginTop: hp('1.5%'),
    paddingTop: hp('3%'),
  },
});

export default NonCash;
