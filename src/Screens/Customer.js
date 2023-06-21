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
import ArrowIcon from 'react-native-vector-icons/Entypo';
import CusButton from '../Screens/Components/CusButton';

const Customer = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Customer'}
        iconname={'arrowleft'}
        onPress={() => navigation.push('ManageStore')}
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
          <TouchableOpacity activeOpacity={0.6} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Arslan
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.txtpress}>
            <Text style={[styles.smlfont, {fontSize: getFontSize(17)}]}>
              Bilal
            </Text>
            <ArrowIcon
              style={{marginTop: hp('0.5%')}}
              name="chevron-right"
              color="black"
              size={15}
            />
          </TouchableOpacity>
          <View style={styles.btnView}>
            <CusButton
              text="Add New Customer"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('NewCustomer')}
            />
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
    alignItems: 'center',
  },
  txtpress: {
    height: hp('5%'),
    width: wp('87%'),
    backgroundColor: 'white',
    marginTop: hp('0.3%'),
    borderBottomWidth: wp('0.2%'),
    borderBottomColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: wp('2%'),
  },
  smlfont: {
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  btnView: {
    height: hp('15%'),
    width: wp('90%'),
    backgroundColor: 'white',
    verticalAlign: 'bottom',
    marginTop: hp('2%'),
    justifyContent: 'center',
  },
});

export default Customer;
