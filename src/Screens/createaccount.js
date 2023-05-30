import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
const CreateAccount = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            width: wp ('90%'),
            height: hp ('12%'),
            borderWidth: wp ('0%'),
            borderRadius: 10,
            borderColor: '#0000000D',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp ('5%'),
          }}
        >
          <Text
            style={{
              color: 'darkgreen',
              fontSize: RFPercentage (2.5),
              textAlign: 'center',
              fontFamily: 'PTSerif-Regular',
            }}
          >
            Note: Must Fill all the Fields in order to Create your Account !
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Email:</Text>

          <TextInput
            style={styles.field}
            placeholder="Enter Your Email"
            placeholderTextColor={'grey'}
            keyboardType="email-address"
          />

          <Text style={styles.text}>Phone Number:</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Phone Number"
            placeholderTextColor={'grey'}
            keyboardType="phone-pad"
          />
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Password"
            placeholderTextColor={'grey'}
            secureTextEntry
          />
          <TouchableOpacity
            style={{
              marginTop: hp ('7%'),
            }}
          >
            <CusButton
              text="LogIn"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('SignIn')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 38,
  },

  text: {
    fontSize: RFPercentage (2.7),
    marginHorizontal: wp ('-3%'),
    marginTop: hp ('4%'),
    color: 'black',
    fontFamily: 'PTSerif-Bold',
  },

  field: {
    borderColor: 'white',
    borderWidth: wp ('0%'),
    borderRadius: 15,
    width: wp ('80%'),
    marginTop: hp ('1%'),
    backgroundColor: '#EBEEEE',
    color: '#2A3256',
    fontSize: RFPercentage (2.4),
    height: hp ('8%'),
    paddingHorizontal: 30,
    fontFamily: 'PTSerif-Regular',
    elevation: 5,
  },
});
export default CreateAccount;
