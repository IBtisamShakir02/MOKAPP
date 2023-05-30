//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import CusButton from './Components/CusButton';
import SrchIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Delete from 'react-native-vector-icons/AntDesign';
// create a component
const ListProduct = ({navigation}) => {
  const [isOpen, setIsOpen] = useState (false);
  const [currentValue, setCurrentValue] = useState ([]);
  const items = [
    {label: 'All Branches', value: 'all branches'},
    {label: 'Islamabad', value: 'islamabad'},
    {label: 'Lahore', value: 'lahore'},
    {label: 'Faisalabad', value: 'faisalabad'},
    {label: 'Karachi', value: 'karachi'},
    {label: 'Multan', value: 'multan'},
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: '#EBEEEE',
        flex: 1,
      }}
    >

      <SafeAreaView>
        <View style={styles.Searchview}>
          <TextInput
            style={styles.txtinpt}
            placeholder="Search Here"
            placeholderTextColor={'grey'}
            placeholderStyle={{width: wp ('20%')}}
          />
          <TouchableOpacity
            style={{alignSelf: 'center', marginLeft: wp ('1.5%')}}
          >
            <SrchIcon name="search" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp ('0.5%')}}>
          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={styles.btnTxt}>
                  Wagyu Sate
                </Text>
                <Text style={styles.smlfnt}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: RFPercentage (2.8),
                    fontFamily: 'PTSerif-Bold',
                    marginTop: hp ('1.3%'),
                  }}
                >
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={styles.btnTxt}>
                  Wagyu Black Pepper
                </Text>
                <Text style={styles.smlfnt}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: RFPercentage (2.8),
                    fontFamily: 'PTSerif-Bold',
                    marginTop: hp ('1.3%'),
                  }}
                >
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={styles.btnTxt}>
                  Salad Egg
                </Text>
                <Text style={styles.smlfnt}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: RFPercentage (2.8),
                    fontFamily: 'PTSerif-Bold',
                    marginTop: hp ('1.3%'),
                  }}
                >
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={styles.btnTxt}>
                  Salad Tuna
                </Text>
                <Text style={styles.smlfnt}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: RFPercentage (2.8),
                    fontFamily: 'PTSerif-Bold',
                    marginTop: hp ('1.3%'),
                  }}
                >
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View>
          <TouchableOpacity
            style={{marginTop: hp ('5%'), marginBottom: hp ('1%')}}
          >
            <CusButton
              text="Add New Product"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('AccountTab')}
              IconName=""
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: hp ('4%'),
            }}
          >
            <Delete name="delete" size={20} color={'#FF0307'} />
            <Text style={styles.Deltxt}>Delete Product</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  Searchview: {
    backgroundColor: 'white',
    width: wp ('99%'),
    height: hp ('9%'),
    marginTop: hp ('0.2%'),
    borderRadius: RFPercentage (1.5),
    borderWidth: wp ('0.1%'),
    borderColor: '#d3d3d3',
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  btn: {
    width: '90%',
    height: hp ('9%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: hp ('2%'),
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  btnTxt: {
    color: 'black',
    fontSize: RFPercentage (2.8),
    fontFamily: 'PTSerif-Bold',
  },
  smlfnt: {
    color: 'black',
    fontSize: RFPercentage (2),
    fontWeight: '400',
    fontFamily: 'PTSerif-Italic',
  },
  txtinpt: {
    width: wp ('83%'),
    backgroundColor: 'white',
    height: hp ('7%'),
    fontFamily: 'PTSerif-Regular',
    fontSize: RFPercentage (2.8),
    color: 'black',
    marginTop: hp ('0.8%'),
    paddingHorizontal: wp ('5%'),
    justifyContent: 'space-between',
  },
  Deltxt: {
    color: '#FF0307',
    fontSize: RFPercentage (2.4),
    marginLeft: wp ('1%'),
    fontFamily: 'PTSerif-Regular',
  },
});

//make this component availabel to the app
export default ListProduct;
