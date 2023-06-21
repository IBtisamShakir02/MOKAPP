import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  Text,
  ScrollView,
} from 'react-native';
import Header from './Components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from 'react-native-vector-icons/Fontisto';

const Discount = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Discount'}
        onPress={() => navigation.push('ManageStore')}
        iconname={'arrowleft'}
      />
      <View style={styles.searchView}>
        <View style={styles.searchText}>
          <TextInput
            style={[styles.txtinp, {fontSize: getFontSize(17)}]}
            placeholder="Search Customer,Payment or Product"
          />
          <TouchableOpacity activeOpacity={0.5} style={styles.searchIcon}>
            <SearchIcon name="search" color="black" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.MiddleCont}>
          <View style={styles.DiscBtnView}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.DiscountBtn,
                {
                  backgroundColor: '#61A4F1',
                  padding: wp('8%'),
                },
              ]}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(25)}]}>
                Discount Opening - 50%
              </Text>
              <Text style={[styles.btntxt, {fontSize: getFontSize(13)}]}>
                Opening Discount for new Customers
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DiscBtnView}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.DiscountBtn,
                {backgroundColor: '#CA93EB', padding: wp('8%')},
              ]}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(25)}]}>
                E-Wallet - 10%
              </Text>
              <Text style={[styles.btntxt, {fontSize: getFontSize(13)}]}>
                Disc for Customers with E-Wallet
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DiscBtnView}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.DiscountBtn,
                {backgroundColor: '#FF90D2', padding: wp('8%')},
              ]}>
              <Text style={[styles.btntxt, {fontSize: getFontSize(25)}]}>
                Discount VISAcard - 17%
              </Text>
              <Text style={[styles.btntxt, {fontSize: getFontSize(13)}]}>
                For VISA card Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchView: {
    height: hp('10%'),
    width: wp('99%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 3,
    margin: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    height: hp('7%'),
    width: wp('94%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: wp('0.1%'),
    borderColor: 'black',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    height: hp('5.5%'),
    width: wp('12%'),
    marginLeft: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
  },
  txtinp: {
    height: hp('5.5%'),
    width: wp('79%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('2%'),
    borderRadius: wp('3%'),
    backgroundColor: 'white',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  MiddleCont: {
    height: hp('80.5%'),
    width: wp('99%'),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  DiscBtnView: {
    height: hp('18%'),
    width: wp('95%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: hp('1%'),
  },
  DiscountBtn: {
    height: hp('15%'),
    width: wp('85%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
    elevation: 10,
  },
  btntxt: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
});

export default Discount;
