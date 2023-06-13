import React from 'react';
import {View, StyleSheet, Text, PixelRatio, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AddButton from '../Components/AddButton';

const Cardgrid = ({text, title, img}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <View style={styles.outerview}>
      <View style={styles.piccont}>
        <Image
          source={img}
          style={{
            width: wp('45%'),
            height: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: wp('4%'),
            borderTopLeftRadius: wp('4%'),
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.lowercont}>
          <Text
            numberOfLines={1}
            style={[
              styles.txt,
              {
                fontSize: getFontSize(24),
                marginLeft: wp('2%'),
                color: 'black',
              },
            ]}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.txt, {fontSize: getFontSize(23)}]}>
            ${text}
          </Text>
        </View>
        <View style={styles.titlecont}>
          <AddButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerview: {
    height: hp('25%'),
    width: wp('45%'),
    borderWidth: wp('0.1%'),
    borderColor: 'grey',
    borderRadius: wp('4%'),
    backgroundColor: 'white',
    elevation: 5,
    marginTop: hp('0.5%'),
  },
  piccont: {
    height: hp('14%'),
    width: wp('45%'),
    backgroundColor: 'red',
    borderTopRightRadius: wp('4%'),
    borderTopLeftRadius: wp('4%'),
    alignSelf: 'center',
  },
  lowercont: {
    width: wp('32%'),
    height: hp('11%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: wp('4%'),
  },
  txt: {
    color: '#1A72DD',
    fontFamily: 'Rubik-Medium',
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
  },
  titlecont: {
    height: hp('11%'),
    width: wp('13%'),
    backgroundColor: 'white',
    borderBottomRightRadius: wp('4%'),
    justifyContent: 'center',
  },
});

export default Cardgrid;
