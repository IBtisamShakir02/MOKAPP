//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  PixelRatio,
} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import BarcodeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridIcon from 'react-native-vector-icons/Feather';
import DownIcon from 'react-native-vector-icons/MaterialIcons';
import CartBtn from './Components/CartBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Components/Header';

// create a component
const Cashier1 = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <ScrollView
      style={{
        backgroundColor: '#EBEEEE',
        flex: 1,
      }}>
      <SafeAreaView>
        <Header
          text={'Cashier'}
          onPress={() => navigation.push('')}
          iconname={'menu-fold'}
        />
        <View
          style={{
            height: hp('9%'),
            width: wp('100%'),
            borderColor: 'grey',
            flexWrap: 'wrap',
            backgroundColor: 'white',
            marginTop: hp('0.1%'),
            borderTopWidth: wp('0.1%'),
            marginBottom: hp('1%'),
            elevation: 10,
          }}>
          <View
            style={{
              height: hp('9%'),
              width: wp('60%'),
              borderColor: 'black',
              marginTop: -1.4,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: getFontSize(20),
                marginTop: hp('3%'),
                marginLeft: wp('13%'),
                fontFamily: 'Rubik-Regular',
              }}>
              All Products
            </Text>
            <DownIcon
              name="keyboard-arrow-down"
              size={27}
              color="black"
              style={{
                marginTop: hp('3%'),
                marginLeft: wp('1%'),
              }}
            />
          </View>
          <View
            style={{
              height: hp('9%'),
              width: wp('13%'),
              flexWrap: 'wrap',
              marginTop: hp('0.1%'),
              marginLeft: wp('-0.5%'),
            }}>
            <TouchableOpacity>
              <SearchIcon
                name="search"
                size={30}
                color="black"
                style={{
                  margin: 10,
                  marginLeft: wp('4%'),
                  marginTop: hp('2.3%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp('9%'),
              width: wp('14%'),
              marginTop: hp('0.3%'),
            }}>
            <TouchableOpacity>
              <BarcodeIcon
                name="barcode"
                size={35}
                color="black"
                style={{
                  margin: 7,
                  marginLeft: wp('3%'),
                  marginTop: hp('1.8%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp('9%'),
              width: wp('14%'),
              marginTop: hp('0.3%'),
            }}>
            <TouchableOpacity>
              <GridIcon
                name="grid"
                size={30}
                color="black"
                style={{
                  margin: 10,
                  marginLeft: wp('1.5%'),
                  marginTop: hp('2.1%'),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middlecont}>
          <TouchableOpacity style={styles.cartbtn}>
            <CartBtn
              text="(Count) Items     Total:(Bill)"
              IconName="shopping-cart"
              onPress={() => navigation.push('')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
// define your styles
const styles = StyleSheet.create({
  middlecont: {
    height: hp('73%'),
    width: wp('95%'),
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cartbtn: {
    alignSelf: 'center',
  },
});

//make this component available to the app
export default Cashier1;
