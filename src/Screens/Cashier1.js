//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  PixelRatio,
  Image,
  Dimensions,
} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import BarcodeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridIcon from 'react-native-vector-icons/Feather';
import data from './Components/Data';
import AddButton from '../Screens/Components/AddButton';
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
  const renderItem = ({item}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    return (
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={[styles.nametxt, {fontSize: getFontSize(20)}]}>
          {item.name}
        </Text>
        <Text style={[styles.pricetxt, {fontSize: getFontSize(18)}]}>
          {item.price}
        </Text>
        <AddButton />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#E3E3E3ED',
        flex: 1,
      }}>
      <Header
        text={'Cashier'}
        onPress={() => navigation.push('')}
        iconname={'menu-fold'}
      />
      <View
        style={{
          height: hp('7%'),
          width: wp('100%'),
          borderColor: 'grey',
          flexWrap: 'wrap',
          backgroundColor: 'white',
          borderTopWidth: wp('0.1%'),
          marginBottom: hp('0.5%'),
          borderRadius: wp('1%'),
          elevation: 3,
          alignSelf: 'center',
        }}>
        <View
          style={{
            height: hp('7%'),
            width: wp('70%'),
            borderColor: 'black',
            marginTop: -1.4,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: getFontSize(24),
              marginTop: hp('2%'),
              marginHorizontal: wp('4.5%'),
              fontFamily: 'Rubik-Regular',
            }}>
            All Products
          </Text>
        </View>
        <View
          style={{
            height: hp('7%'),
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
                marginTop: hp('1.5%'),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: hp('7%'),
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
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
      <View style={styles.cartcont}>
        <TouchableOpacity style={styles.cartbutn}>
          <CartBtn
            text="(Count) Items     Total:(Bill)"
            IconName="shopping-cart"
            onPress={() => navigation.push()}
            height={50}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
// define your styles
const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    marginLeft: wp('3.2%'),
    marginTop: hp('1%'),
    borderRadius: wp('2%'),
  },
  imageContainer: {
    margin: wp('2'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
  },
  image: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
  },
  nametxt: {
    color: 'black',
    fontFamily: 'Rubik-Medium',
    marginLeft: wp('3%'),
  },
  pricetxt: {
    color: '#1A72DD',
    fontFamily: 'Rubik-Medium',
    marginLeft: wp('3%'),
  },
  cartcont: {
    height: hp('7%'),
    borderRadius: wp('4%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Cashier1;
