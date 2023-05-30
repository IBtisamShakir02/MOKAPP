//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import CusButton from './Components/CusButton';
import DownIcon from 'react-native-vector-icons/AntDesign';

// create a component
const AccountTab = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.Details}>
          <View>
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                source={require ('../Screens/assets/images/profil-photo.png')}
                style={{
                  height: hp ('13%'),
                  width: wp ('25%'),
                  marginLeft: wp ('3%'),
                  borderWidth: wp ('0.2%'),
                  borderColor: '#4b0082',
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.txt1}>MOKPOS Store</Text>
            <Text style={styles.txt2}>Owner@gmail.com</Text>
          </View>
        </View>
        <View style={styles.secCont}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp ('90%'),
              marginLeft: wp ('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp ('0.2%'),
              alignSelf: 'center',
            }}
          >
            <Text style={styles.cont2txt}>Setting Account</Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp ('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp ('90%'),
              marginLeft: wp ('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp ('0.2%'),
              alignSelf: 'center',
            }}
          >
            <Text style={styles.cont2txt}>Subscription History</Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp ('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp ('90%'),
              marginLeft: wp ('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp ('0.2%'),
              alignSelf: 'center',
            }}
          >
            <Text style={styles.cont2txt}>Business Information</Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp ('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp ('90%'),
              marginLeft: wp ('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp ('0.2%'),
              alignSelf: 'center',
            }}
          >
            <Text style={styles.cont2txt}>Dashboard</Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp ('1%'),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: wp ('90%'),
              marginLeft: wp ('1.5%'),
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: wp ('0.2%'),
              alignSelf: 'center',
            }}
          >
            <Text style={styles.cont2txt}>User Help</Text>
            <DownIcon
              name="right"
              size={18}
              color="black"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: hp ('1%'),
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.cont2txt,
              {
                textAlign: 'left',
                fontFamily: 'PTSerif-Bold',
                fontSize: RFPercentage (1.7),
                marginLeft: wp ('7%'),
              },
            ]}
          >
            MOKPOS V.1.0
          </Text>
        </View>
        <View style={styles.btnView}>
          <CusButton
            text="Log Out"
            backgroundColor={'white'}
            color={'red'}
            onPress={() => navigation.push ('LogInOwner')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Details: {
    flex: 0.6,
    backgroundColor: 'white',
    width: wp ('98%'),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp ('1%'),
    alignSelf: 'center',
  },
  txtView: {
    width: wp ('60%'),
    height: hp ('18%'),
    justifyContent: 'center',
    marginLeft: wp ('3%'),
  },
  txt1: {
    color: 'black',
    fontSize: RFPercentage (3.5),
    marginRight: wp ('5%'),
    textAlignVertical: 'center',
    fontFamily: 'PTSerif-Bold',
  },
  txt2: {
    color: 'black',
    fontSize: RFPercentage (2.1),
    fontFamily: 'PTSerif-Regular',
  },
  secCont: {
    flex: 1.5,
    backgroundColor: 'white',
    width: wp ('99%'),
    marginRight: wp ('3%'),
    marginTop: hp ('3%'),
  },
  btnView: {
    flex: 1.5,
    backgroundColor: 'white',
    width: wp ('98%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cont2txt: {
    fontSize: RFPercentage (2.5),
    color: 'black',
    fontFamily: 'PTSerif-Regular',
    margin: 9,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default AccountTab;
