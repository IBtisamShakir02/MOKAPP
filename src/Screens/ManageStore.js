import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  Text,
} from 'react-native';
import Header from './Components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from 'react-native-vector-icons/Fontisto';
import ArrowIcon from 'react-native-vector-icons/Entypo';

const ManageStore = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.Container}>
      <Header
        text={'Manage Store'}
        onPress={() => navigation.push('CashManager')}
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
      <ScrollView style={styles.MiddleCont}>
        <View style={styles.setproduct}>
          <Text style={[styles.setproducttxt, {fontSize: getFontSize(20)}]}>
            SetProduct
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push('Listproduct')}
            activeOpacity={0.4}
            style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Product
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Category Product
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('Discount')}
            activeOpacity={0.4}
            style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Discount
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Order Type
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.CashPay}>
          <Text style={[styles.setproducttxt, {fontSize: getFontSize(20)}]}>
            Cashier & Payment
          </Text>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Payment Method
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Tax & Charges
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.setPrinter}>
          <Text style={[styles.setproducttxt, {fontSize: getFontSize(20)}]}>
            Set Printer & Reciept
          </Text>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Printer
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Reciept
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.setBranch}>
          <Text style={[styles.setproducttxt, {fontSize: getFontSize(20)}]}>
            Set Branch & Employee
          </Text>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Branch List
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Employee List
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('Customer')}
            activeOpacity={0.4}
            style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Customer
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.setEmployee}>
          <Text style={[styles.setproducttxt, {fontSize: getFontSize(20)}]}>
            Set Branch & Employee
          </Text>
          <TouchableOpacity activeOpacity={0.4} style={styles.txtpress2}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Code Access Cashier
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
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
    borderColor: '#2A3256',
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
  setproduct: {
    height: hp('24%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: wp('1%'),
  },
  CashPay: {
    height: hp('14%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: wp('1%'),
  },
  setPrinter: {
    height: hp('14%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: wp('1%'),
  },
  setBranch: {
    height: hp('19%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: wp('1%'),
  },
  setEmployee: {
    height: hp('9%'),
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: wp('1%'),
  },
  setproducttxt: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
  },
  txtpress: {
    height: hp('4.5%'),
    width: wp('87%'),
    backgroundColor: 'white',
    marginTop: hp('0.2%'),
    borderBottomWidth: wp('0.2%'),
    borderBottomColor: '#2A3256',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: wp('1%'),
  },
  txtpress2: {
    height: hp('4.5%'),
    width: wp('87%'),
    backgroundColor: 'white',
    marginTop: hp('0.2%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: wp('1%'),
  },
  smlfont: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
});

export default ManageStore;
