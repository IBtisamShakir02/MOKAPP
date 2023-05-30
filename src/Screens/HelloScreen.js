import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import HelloScreenimg from '../Screens/assets/images/Accountimg.svg';
import CusButton from './Components/CusButton';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HelloScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{marginTop: hp ('1%')}}>

        <Text style={styles.welcometxt}>
          Welcome to
        </Text>
        <Text style={styles.moktext}>
          MOKPOS.
        </Text>
        <View style={{alignSelf: 'center'}}>
          <HelloScreenimg style={styles.img} />
        </View>
        <Text style={styles.smltxt}>
          Easy Management for your Store.
        </Text>
        <View style={styles.recimgview}>
          <Image
            source={require ('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp ('2%'), marginLeft: 10}}
          />
          <Image
            source={require ('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp ('2%'), marginLeft: 10}}
          />
          <Image
            source={require ('../Screens/assets/images/Rectangle1.png')}
            style={{marginTop: hp ('2%'), marginLeft: 10}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginTop: hp ('3%'),
            }}
            activeOpacity={0.8}
          >
            <CusButton
              text="SignUp"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('CreateAccount')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: hp ('1.5%'),
            }}
            activeOpacity={0.8}
          >
            <CusButton
              text="Login"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('SignIn')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  welcometxt: {
    color: 'black',
    fontSize: RFPercentage (6),
    textAlign: 'center',
    marginTop: hp ('3.5%'),
    fontFamily: 'PTSerif-Bold',
  },
  moktext: {
    textAlign: 'center',
    marginBottom: hp ('1%'),
    fontSize: RFPercentage (5.3),
    color: '#1A72DD',
    fontFamily: 'PTSerif-Bold',
  },
  recimgview: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: wp ('-5%'),
  },
  smltxt: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'PTSerif-Bold',
    marginTop: hp ('0.5%'),
  },
  img: {
    width: wp ('90%'),
    height: hp ('50%'),
  },
});

export default HelloScreen;
