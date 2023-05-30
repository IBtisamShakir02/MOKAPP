//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Wallet from 'react-native-vector-icons/Fontisto';
import KeyPad from './Components/KeyPad';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const PaymentMethod1 = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#EBEEEE'}}>
      <SafeAreaView>
        <View>
          <View style={styles.Cont1}>
            <Text style={styles.Cont1txt}>Total Bill:</Text>
            <Text
              style={[
                styles.Cont1txt,
                {
                  color: '#1A72DD',
                  fontSize: RFPercentage (4),
                  marginTop: hp ('-0.5%'),
                  fontFamily: 'PTSerif-Bold',
                },
              ]}
            >
              CountBill
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View
              style={[
                styles.Cont1,
                {
                  width: wp ('49.5%'),
                  alignSelf: 'flex-start',
                  borderBottomColor: '#000080',
                  borderBottomWidth: wp ('0.8%'),
                  justifyContent: 'center',
                  elevation: 5,
                },
              ]}
            >
              <TouchableOpacity>
                <Text style={styles.Cont2txt}>
                  Cash
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.Cont1,
                {
                  width: wp ('49.5%'),
                  alignSelf: 'flex-start',
                  borderBottomColor: '#000080',
                  borderBottomWidth: wp ('0.8%'),
                  justifyContent: 'center',
                  elevation: 5,
                },
              ]}
            >
              <TouchableOpacity>
                <Text style={styles.Cont2txt}>
                  Non-Cash
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Cont3}>
            <Wallet
              name="wallet"
              size={25}
              color={'black'}
              style={{alignSelf: 'center', marginStart: wp ('29%')}}
            />
            <Text
              style={[
                styles.Cont2txt,
                {
                  fontWeight: '400',
                  marginTop: hp ('2%'),
                  marginLeft: wp ('1.5%'),
                },
              ]}
            >
              Exact Amount
            </Text>

          </View>

          <KeyPad />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  Cont1: {
    backgroundColor: 'white',
    width: wp ('100%'),
    height: hp ('9%'),
    borderWidth: RFPercentage (0.1),
    borderColor: '#d3d3d3',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: hp ('2.2%'),
    elevation: 5,
  },
  Cont1txt: {
    color: 'black',
    fontSize: RFPercentage (3),
    fontFamily: 'PTSerif-Regular',
    textAlign: 'left',
    marginHorizontal: wp ('4%'),
    marginTop: hp ('0.3%'),
  },
  Cont2txt: {
    color: 'black',
    fontSize: RFPercentage (3),
    fontFamily: 'PTSerif-Bold',
    textAlign: 'center',
  },
  Cont3: {
    height: hp ('8%'),
    width: wp ('97%'),
    alignSelf: 'center',
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
    marginTop: hp ('0.6%'),
    borderRadius: RFPercentage (1.5),
    flexDirection: 'row',
    elevation: 5,
  },
});

//make this component available to the app
export default PaymentMethod1;
