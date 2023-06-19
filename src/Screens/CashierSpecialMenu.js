import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import CartBtn from './Components/CartBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Components/Header';
import AddButton from '../Screens/Components/AddButton';

const data = [
  {
    id: 1,
    name: 'Burger',
    price: '$110',
    image: require('../Screens/assets/images/burger-ga1e31cbfe_640.jpg'),
  },
  {
    id: 2,
    name: 'Egg Salad',
    price: '$100',
    image: require('../Screens/assets/images/EggSalad.png'),
  },
  {
    id: 3,
    name: 'Steak',
    price: '$150',
    image: require('../Screens/assets/images/Steak.jpg'),
  },
];

// create a component
const SpecialMenu = ({navigation}) => {
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
        <Text style={[styles.nametxt, {fontSize: getFontSize(18)}]}>
          {item.name}
        </Text>
        <Text style={[styles.pricetxt, {fontSize: getFontSize(16)}]}>
          {item.price}
        </Text>
        <AddButton />
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#EBEEEE', flex: 1}}>
      <Header
        text={'Cashier'}
        onPress={() => {
          navigation.openDrawer();
        }}
        iconname={'menu-fold'}
      />
      <View style={styles.Cont1}>
        <Text style={[styles.Cont1txt, {fontSize: getFontSize(20)}]}>
          Special Menu
        </Text>
      </View>
      <View style={styles.middlecont}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={1}
        />
        <View style={styles.cartcont}>
          <CartBtn
            text="(Count) Items  Total:(Bill)"
            IconName="shopping-cart"
            onPress={() => navigation.push('')}
            height={50}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Cont1: {
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('7%'),
    alignSelf: 'center',
    borderWidth: hp('0.1%'),
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    marginBottom: hp('0.5%'),
    elevation: 3,
    borderRadius: wp('1%'),
  },
  Cont1txt: {
    color: 'black',
    textAlign: 'left',
    marginHorizontal: hp('2%'),
    fontFamily: 'Roboto-Regular',
    marginTop: hp('-0.5%'),
  },
  middlecont: {
    height: hp('79.5%'),
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: '#E3E3E3ED',
    justifyContent: 'center',
  },
  listContainer: {
    width: Dimensions.get('window').width / 1 - 20,
    backgroundColor: 'white',
    marginLeft: wp('2.4%'),
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
    fontFamily: 'Roboto-Regular',
    marginLeft: wp('3%'),
  },
  pricetxt: {
    color: '#1A72DD',
    fontFamily: 'Roboto-Regular',
    marginLeft: wp('3%'),
  },
  cartcont: {
    height: hp('7%'),
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: hp('1.3%'),
  },
});

//make this component available to the app
export default SpecialMenu;
