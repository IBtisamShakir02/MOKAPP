//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import BarcodeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridIcon from 'react-native-vector-icons/Feather';
import DownIcon from 'react-native-vector-icons/MaterialIcons';
import CartBtn from './Components/CartBtn';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const Cashier1 = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#EBEEEE',
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            height: hp ('9%'),
            width: wp ('100%'),
            borderColor: 'grey',
            flexWrap: 'wrap',
            backgroundColor: 'white',
            marginBottom: hp ('2%'),
            marginTop: hp ('0.1%'),
            borderTopWidth: wp ('0.1%'),
            elevation: 10,
          }}
        >

          <View
            style={{
              height: hp ('9%'),
              width: wp ('60%'),
              borderColor: 'black',
              marginTop: -1.4,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: RFPercentage (2.5),
                  marginTop: hp ('3%'),
                  marginLeft: wp ('13%'),
                  fontFamily: 'PTSerif-Bold',
                }}
              >
                All Products

              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <DownIcon
                name="keyboard-arrow-down"
                size={27}
                color="black"
                style={{
                  marginTop: hp ('3%'),
                  marginLeft: wp ('1%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp ('9%'),
              width: wp ('13%'),
              flexWrap: 'wrap',
              marginTop: hp ('0.1%'),
              marginLeft: wp ('-0.5%'),
            }}
          >
            <TouchableOpacity>
              <SearchIcon
                name="search"
                size={30}
                color="black"
                style={{
                  margin: 10,
                  marginLeft: wp ('4%'),
                  marginTop: hp ('2.3%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp ('9%'),
              width: wp ('14%'),
              marginTop: hp ('0.3%'),
            }}
          >
            <TouchableOpacity>
              <BarcodeIcon
                name="barcode"
                size={35}
                color="black"
                style={{
                  margin: 7,
                  marginLeft: wp ('3%'),
                  marginTop: hp ('1.8%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp ('9%'),
              width: wp ('14%'),
              marginTop: hp ('0.3%'),
            }}
          >
            <TouchableOpacity>
              <GridIcon
                name="grid"
                size={30}
                color="black"
                style={{
                  margin: 10,
                  marginLeft: wp ('1.5%'),
                  marginTop: hp ('2.1%'),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity style={{position: 'relative'}}>
            <CartBtn
              text="(Count) Items     Total:(Bill)"
              IconName="shopping-cart"
              onPress={() => navigation.push ('')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
// define your styles
const styles = StyleSheet.create ({});

//make this component available to the app
export default Cashier1;
