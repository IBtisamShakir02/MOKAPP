//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import CusButton from './Components/CusButton';
import Wicon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import Sicon from 'react-native-vector-icons/MaterialIcons';
import Cicon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const LogInOwner = ({navigation}) => {
  const [Email, setEmail] = useState ('');
  const [Password, setPassword] = useState ('');

  const submit = () => {
    if (Email === 'Ibtisam' && Password === '000') {
      navigation.navigate ('AddProduct');
    } else {
      Alert.alert ('Invalid Data');
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View style={styles.fstcont}>
          <Text style={styles.fstconttxt}>
            Note: Must Fill all the Fields in order to Create your Account !
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Email or Phone Number:</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Email"
            placeholderTextColor={'grey'}
            value={Email}
            onChangeText={data => setEmail (data)}
            keyboardType="email-address"
          />
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Password"
            placeholderTextColor={'grey'}
            value={Password}
            onChangeText={data => setPassword (data)}
            secureTextEntry
          />

          <Text style={styles.otptxt}>
            Send OTP:
          </Text>

          <View style={styles.btncont1}>
            <TouchableOpacity style={styles.emailbtn}>
              <Icon name="email" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.wtsappbtn}>
              <Wicon name="whatsapp" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smsbtn}>
              <Sicon name="sms" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.callbtn}>
              <Cicon name="phone-call" size={25} color="white" />
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            style={{
              marginTop: hp ('5%'),
            }}
          >
            <CusButton
              text="LogIn"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => submit ()}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.frgtpass}
              onPress={() => navigation.push ('ForgotPassword')}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    marginTop: hp ('1%'),
  },
  fstcont: {
    width: wp ('90%'),
    height: hp ('10%'),
    borderRadius: 5,
    borderColor: '#0000000D',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: hp ('2%'),
  },
  fstconttxt: {
    color: 'darkgreen',
    fontSize: RFPercentage (2.3),
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
  },

  text: {
    fontSize: RFPercentage (2.7),
    color: 'black',
    marginHorizontal: wp ('6%'),
    marginTop: hp ('4%'),
    color: 'black',
    fontFamily: 'PTSerif-Bold',
  },

  field: {
    borderColor: 'white',
    borderRadius: 15,
    width: wp ('80%'),
    alignSelf: 'center',
    marginTop: hp ('1%'),
    backgroundColor: '#EBEEEE',
    color: '#2A3256',
    fontSize: RFPercentage (2.4),
    height: hp ('8%'),
    paddingHorizontal: wp ('5%'),
    fontFamily: 'PTSerif-Bold',
    elevation: 5,
  },
  otptxt: {
    color: 'black',
    fontSize: RFPercentage (2.4),
    margin: 25,
    marginBottom: hp ('5%'),
    fontFamily: 'PTSerif-Bold',
  },
  btncont1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailbtn: {
    backgroundColor: '#1A72DD',
    width: wp ('10%'),
    height: hp ('5%'),
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  wtsappbtn: {
    backgroundColor: '#1A72DD',
    width: wp ('10%'),
    height: hp ('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp ('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  smsbtn: {
    backgroundColor: '#1A72DD',
    width: wp ('10%'),
    height: hp ('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp ('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  callbtn: {
    backgroundColor: '#1A72DD',
    width: wp ('10%'),
    height: hp ('5%'),
    borderRadius: 10,
    borderColor: 'white',
    marginStart: wp ('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  frgtpass: {
    color: '#1A72DD',
    textAlign: 'center',
    marginTop: hp ('1%'),
    fontSize: RFPercentage (2.4),
    textDecorationLine: 'underline',
    fontFamily: 'Rubik-Regular',
  },
});

//make this component available to the app
export default LogInOwner;
