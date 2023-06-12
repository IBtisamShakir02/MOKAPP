//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  PixelRatio,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CusButton from './Components/CusButton';
import DownIcon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from './Components/Header';

// create a component
const AccountTab = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

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
  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Accounts'}
        onPress={() => navigation.push('Listproduct')}
        iconname={'arrowleft'}
      />
      <View>
        <View style={styles.Details}>
          <View>
            <TouchableOpacity activeOpacity={0.8} onPress={openCamera}>
              <Image
                source={{uri: galleryPhoto}}
                style={{
                  height: hp('15%'),
                  width: wp('30%'),
                  marginLeft: wp('3%'),
                  borderWidth: wp('0.2%'),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openGallery}
              style={{
                height: hp('3%'),
                width: wp('32%'),
                backgroundColor: '#2A3256',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: hp('0.5%'),
                borderRadius: wp('1.5%'),
                marginLeft: wp('1.8%'),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: getFontSize(12),
                  textAlign: 'center',
                  fontFamily: 'Rubik-Regular',
                }}>
                Choose From Gallery
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.txtView}>
            <Text style={[styles.txt1, {fontSize: getFontSize(25)}]}>
              MOKPOS Store
            </Text>
            <Text style={[styles.txt2, {fontSize: getFontSize(15)}]}>
              Owner@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.secCont}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              marginLeft: wp('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp('0.2%'),
              alignSelf: 'center',
            }}>
            <Text style={[styles.cont2txt, {fontSize: getFontSize(17)}]}>
              Setting Account
            </Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              marginLeft: wp('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp('0.2%'),
              alignSelf: 'center',
            }}>
            <Text style={[styles.cont2txt, {fontSize: getFontSize(17)}]}>
              Subscription History
            </Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              marginLeft: wp('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp('0.2%'),
              alignSelf: 'center',
            }}>
            <Text style={[styles.cont2txt, {fontSize: getFontSize(17)}]}>
              Business Information
            </Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              marginLeft: wp('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp('0.2%'),
              alignSelf: 'center',
            }}>
            <Text style={[styles.cont2txt, {fontSize: getFontSize(17)}]}>
              Dashboard
            </Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp('90%'),
              marginLeft: wp('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp('0.2%'),
              alignSelf: 'center',
            }}>
            <Text style={[styles.cont2txt, {fontSize: getFontSize(17)}]}>
              User Help
            </Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp('1%'),
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.cont2txt,
              {
                textAlign: 'left',
                fontFamily: 'Rubik-Medium',
                fontSize: getFontSize(13),
                marginLeft: wp('7%'),
              },
            ]}>
            MOKPOS V.1.0
          </Text>
        </View>
        <View style={styles.btnView}>
          <CusButton
            text="Log Out"
            backgroundColor={'white'}
            color={'red'}
            marginTop={30}
            onPress={() => navigation.push('LogInOwner')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Details: {
    flex: 0.8,
    backgroundColor: 'white',
    width: wp('98%'),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp('0.5%'),
    alignSelf: 'center',
    elevation: 2,
  },
  txtView: {
    width: wp('60%'),
    height: hp('18%'),
    justifyContent: 'center',
    marginLeft: wp('3%'),
  },
  txt1: {
    color: '#2A3256',
    textAlignVertical: 'center',
    fontFamily: 'Rubik-Medium',
    marginTop: hp('-3%'),
  },
  txt2: {
    color: 'black',
    fontFamily: 'Rubik-Regular',
  },
  secCont: {
    flex: 1.5,
    backgroundColor: 'white',
    width: wp('98%'),
    alignSelf: 'center',
    elevation: 5,
    marginTop: hp('0.5%'),
  },
  btnView: {
    flex: 1.2,
    backgroundColor: 'white',
    width: wp('98%'),
    alignSelf: 'center',
    elevation: 8,
  },
  cont2txt: {
    color: 'black',
    fontFamily: 'Rubik-Regular',
    margin: 9,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default AccountTab;
