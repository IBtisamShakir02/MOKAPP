//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import CusButton from './Components/CusButton';
import Accountimg from '../Screens/assets/images/HelloScreenimg.svg';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const LogIn = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={styles.cont1txt}>
            Welcome to MOKPOS!
          </Text>
          <Text
            style={{
              color: 'black',
              margin: 10,
              marginLeft: wp ('12%'),
              fontSize: RFPercentage (2.3),
              width: wp ('70%'),
              fontFamily: 'Roboto-Italic',
            }}
          >
            Select Login as the Owner or Employee first to Continue
          </Text>
          <View style={{alignSelf: 'center'}}>
            <Accountimg
              style={{
                width: wp ('90%'),
                height: hp ('43%'),
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: hp ('2%'),
              marginBottom: hp ('1%'),
              marginLeft: wp ('25%'),
              width: wp ('50%'),
              height: hp ('6.5%'),
            }}
          >
            <CusButton
              text="OWNER"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('LogInOwner')}
              IconName="user"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              marginBottom: hp ('1%'),
              fontWeight: 'bold',
            }}
          >
            or
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: wp ('25%'),
              width: wp ('50%'),
              height: hp ('6.5%'),
            }}
          >
            <CusButton
              text="Employee"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('LoginEmp')}
              IconName="users"
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: RFPercentage (2),
              marginTop: hp ('2%'),
              fontFamily: 'Rubik-Regular',
            }}
          >
            Don't have an Account?
          </Text>

          <TouchableOpacity>
            <Text
              onPress={() => navigation.push ('CreateAccount')}
              style={{
                color: '#1A72DD',
                textAlign: 'center',
                fontSize: RFPercentage (2.5),
                textDecorationLine: 'underline',
                fontFamily: 'Rubik-Medium',
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  cont1txt: {
    width: wp ('85%'),
    alignSelf: 'center',
    paddingTop: hp ('3.5%'),
    fontSize: RFPercentage (4.5),
    color: 'black',
    fontFamily: 'Rubik-Medium',
  },
});
//make this component available to the app
export default LogIn;
