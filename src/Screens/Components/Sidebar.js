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
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Dropdown from '../Components/Dropdown';
import CashierIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryIcon from 'react-native-vector-icons/FontAwesome5';
import Report from 'react-native-vector-icons/Octicons';
import Store from 'react-native-vector-icons/Fontisto';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
import Support from 'react-native-vector-icons/FontAwesome';

const Sidebar = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.uppercont}>
        <Text style={[styles.upperconttxt, {fontSize: getFontSize(22)}]}>
          MyNameStore
        </Text>
        <Dropdown />
      </View>
      <View style={styles.scndcont}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.push('CashManager')}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('3%'),
            marginTop: hp('1%'),
          }}>
          <CashierIcon name="account-cash-outline" color="white" size={28} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('5%'),
            }}>
            Cashier
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('3%'),
            marginTop: hp('1%'),
          }}>
          <HistoryIcon name="coins" color="white" size={28} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('5%'),
            }}>
            History Transactions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('3%'),
            marginTop: hp('1%'),
          }}>
          <Report name="repo" color="white" size={28} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('7%'),
            }}>
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('ManageStore')}
          activeOpacity={0.8}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('3%'),
            marginTop: hp('1%'),
          }}>
          <Store name="shopping-store" color="white" size={23} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('5%'),
            }}>
            Manage Store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.push('AccountTab')}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('2.5%'),
            marginTop: hp('1%'),
          }}>
          <Account name="account-outline" color="white" size={32} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('4.5%'),
            }}>
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: wp('63%'),
            flexDirection: 'row',
            alignItems: 'center',
            height: hp('6%'),
            alignSelf: 'center',
            paddingLeft: wp('3%'),
            marginTop: hp('1%'),
          }}>
          <Support name="support" color="white" size={27} />
          <Text
            style={{
              fontSize: getFontSize(17),
              color: 'white',
              fontWeight: '400',
              marginLeft: wp('5%'),
            }}>
            Support
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastview}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnview}>
          <Text style={[styles.btntxt, {fontSize: getFontSize(18)}]}>
            Upgrade To Premium
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A72DD',
  },
  uppercont: {
    width: wp('65%'),
    height: hp('15%'),
    alignSelf: 'center',
    marginTop: hp('4%'),
  },
  upperconttxt: {
    color: 'white',
    fontWeight: '500',
    marginLeft: wp('4%'),
    marginTop: hp('2%'),
  },
  scndcont: {
    height: hp('60%'),
    width: wp('65%'),
    alignSelf: 'center',
  },
  lastview: {
    height: hp('12%'),
    width: wp('67%'),
    alignSelf: 'center',
    marginTop: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnview: {
    height: hp('6.5%'),
    width: wp('55%'),
    backgroundColor: 'white',
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    color: '#1A72DD',
    fontWeight: '500',
  },
});

export default Sidebar;
