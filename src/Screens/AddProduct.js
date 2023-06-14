//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  PixelRatio,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CusButton from './Components/CusButton';
import Header from './Components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// create a component
const Addproduct = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getfontSize = size => size / fontScale;

  const [Selected, setSelected] = useState('');
  const [cameraPhoto, setcameraPhoto] = useState();
  const [galleryPhoto, setgalleryPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setcameraPhoto(result.assets[0].uri);
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setgalleryPhoto(result.assets[0].uri);
  };

  const data = [
    {key: '1', value: 'Salad'},
    {key: '2', value: 'Steak'},
    {key: '3', value: 'Pasta'},
    {key: '4', value: 'Burger'},
    {key: '5', value: 'Drinks'},
  ];

  const data1 = [
    {key: 'a', value: 'Islamabad'},
    {key: 'b', value: 'Lahore'},
    {key: 'c', value: 'Faisalabad'},
    {key: 'd', value: 'Karachi'},
    {key: 'e', value: 'Multan'},
  ];

  return (
      <SafeAreaView style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
        <Header
          text={'Add Product'}
          iconname={'arrowleft'}
          onPress={() => navigation.push('LogInOwner')}
        />
        <ScrollView>
        <View>
          <Text style={[styles.Detailstxt, {fontSize: getfontSize(23)}]}>
            Product Details:
          </Text>
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Product Name
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getfontSize(17)}]}
            placeholder="Enter Product Name"
            placeholderTextColor={'grey'}
            keyboardType="default"
          />
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Selling Price
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getfontSize(17)}]}
            placeholder="$10.00"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text style={[styles.Detailstxt, {fontSize: getfontSize(22)}]}>
            Add Type Price
          </Text>
        </View>

        <View style={styles.Typeview}>
          <Text style={[styles.Typeviewtxt, {fontSize: getfontSize(18)}]}>
            Dine In
          </Text>
          <TextInput
            style={[styles.Typefiled, {fontSize: getfontSize(16)}]}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={[styles.Typeviewtxt, {fontSize: getfontSize(18)}]}>
            Take Away
          </Text>
          <TextInput
            style={[styles.Typefiled, {fontSize: getfontSize(16)}]}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={[styles.Typeviewtxt, {fontSize: getfontSize(18)}]}>
            Delivery
          </Text>
          <TextInput
            style={[styles.Typefiled, {fontSize: getfontSize(16)}]}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
        </View>

        <Text style={[styles.Detailstxt, {fontSize: getfontSize(22)}]}>
          Add On Details (Optional)
        </Text>

        <View style={styles.Picview}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignSelf: 'center'}}
            onPress={openCamera}>
            <Image
              source={{uri: cameraPhoto}}
              style={{
                marginHorizontal: wp('1%'),
                height: hp('10%'),
                width: wp('22%'),
                alignSelf: 'center',
                borderRadius: 7,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Butn}
            activeOpacity={0.8}
            onPress={openGallery}>
            <Text style={[styles.Butntxt, {fontSize: getfontSize(13)}]}>
              Choose Photo
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Categories
          </Text>
          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            boxStyles={{
              height: hp('7%'),
              borderRadius: 5,
              width: wp('90%'),
              alignSelf: 'center',
              marginTop: hp('2%'),
              backgroundColor: '#EBEEEE',
              elevation: 3,
              alignItems: 'center',
            }}
            inputStyles={{
              color: 'black',
              fontSize: getfontSize(19),
              fontFamily: 'Rubik-Regular',
            }}
            dropdownTextStyles={{
              color: 'black',
              fontSize: getfontSize(15),
              textAlign: 'center',
              fontFamily: 'Rubik-Regular',
            }}
            dropdownStyles={{
              width: wp('90%'),
              marginLeft: wp('5%'),
              height: hp('27%'),
              backgroundColor: '#EBEEEE',
              elevation: 3,
              marginBottom: hp('-3%'),
            }}
            defaultOption={{key: '1', value: 'Salad'}}
          />
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Capital Price
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getfontSize(17)}]}
            placeholder="$10.80"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Stock Keeping Unit
          </Text>
          <TextInput
            style={[styles.field, {fontSize: getfontSize(17)}]}
            placeholder="H454564"
            placeholderTextColor={'grey'}
            keyboardType="name-phone-pad"
          />
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            BarCode
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={[styles.field, {fontSize: getfontSize(17)}]}
            placeholder="4564564"
            placeholderTextColor={'grey'}
            keyboardType="default"
          />
        </View>

        <View>
          <Text style={[styles.Nametxt, {fontSize: getfontSize(21)}]}>
            Branch
          </Text>
          <SelectList
            setSelected={val1 => setSelected(val1)}
            data={data1}
            save="value"
            boxStyles={{
              height: hp('7%'),
              borderRadius: 5,
              width: wp('90%'),
              alignSelf: 'center',
              marginTop: hp('2%'),
              backgroundColor: '#EBEEEE',
              elevation: 3,
              alignItems: 'center',
            }}
            inputStyles={{
              color: 'black',
              fontSize: getfontSize(19),
              fontFamily: 'Rubik-Regular',
            }}
            dropdownTextStyles={{
              color: 'black',
              fontSize: getfontSize(15),
              textAlign: 'center',
              fontFamily: 'Rubik-Regular',
            }}
            dropdownStyles={{
              width: wp('90%'),
              marginLeft: wp('5%'),
              height: hp('27%'),
              backgroundColor: '#EBEEEE',
              elevation: 3,
              marginBottom: hp('-3%'),
            }}
            defaultOption={{key: 'a', value: 'Islamabad'}}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: hp('4%'),
              marginBottom: hp('8%'),
            }}>
            <CusButton
              text="Add Product"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('Listproduct')}
            />
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Detailstxt: {
    color: 'black',
    marginTop: hp('2.5%'),
    marginLeft: wp('5%'),
    marginBottom: hp('0.7%'),
    fontFamily: 'Rubik-Medium',
  },
  Nametxt: {
    color: 'black',
    fontFamily: 'Rubik-Regular',
    marginStart: wp('5%'),
    marginTop: hp('2.5%'),
  },
  field: {
    borderColor: 'white',
    borderRadius: 2,
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    backgroundColor: '#EBEEEE',
    fontFamily: 'Rubik-Regular',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('5%'),
    elevation: 5,
  },
  Typeview: {
    backgroundColor: '#EBEEEE',
    width: wp('90%'),
    height: hp('45%'),
    alignSelf: 'center',
    borderRadius: wp('5%'),
    marginTop: hp('0.7%'),
  },

  Typeviewtxt: {
    color: 'black',
    fontFamily: 'Rubik-Medium',
    marginLeft: wp('5%'),
    marginTop: hp('2.3%'),
  },

  Typefiled: {
    borderColor: 'black',
    borderWidth: wp('0.1%'),
    borderRadius: wp('1.5%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('1.5%'),
    backgroundColor: '#EBEEEE',
    fontFamily: 'Rubik-Regular',
    color: '#2A3256',
    height: hp('6.5%'),
    paddingHorizontal: wp('4%'),
    elevation: 5,
  },
  Picview: {
    backgroundColor: 'white',
    width: wp('60%'),
    height: hp('11.3%'),
    alignSelf: 'center',
    borderWidth: wp('0.3%'),
    borderRadius: wp('2%'),
    marginTop: hp('1%'),
    borderColor: '#2A3256',
    flexDirection: 'row',
  },
  Butn: {
    height: wp('10%'),
    width: wp('25%'),
    backgroundColor: '#2A3256',
    borderRadius: wp('1.5%'),
    marginHorizontal: wp('5%'),
    marginTop: hp('3%'),
    elevation: 5,
  },
  Butntxt: {
    color: 'white',
    textAlign: 'center',
    marginTop: hp('1.5%'),
    fontFamily: 'Rubik-Medium',
  },
});

//make this component available to the app
export default Addproduct;
