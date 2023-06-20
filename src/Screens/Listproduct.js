//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  PixelRatio,
} from 'react-native';
import CusButton from './Components/CusButton';
import SrchIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Delete from 'react-native-vector-icons/AntDesign';
import Header from './Components/Header';
// create a component
const ListProduct = ({navigation}) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <ScrollView
      style={{
        backgroundColor: '#EBEEEE',
        flex: 1,
      }}>
      <SafeAreaView>
        <Header
          text={'List Product'}
          iconname={'arrowleft'}
          onPress={() => navigation.push('ManageStore')}
        />
        <View style={styles.Searchview}>
          <TextInput
            style={[styles.txtinpt, {fontSize: getFontSize(21)}]}
            placeholder="Search Here"
            placeholderTextColor={'grey'}
            placeholderStyle={{width: wp('20%')}}
          />
          <TouchableOpacity
            style={{alignSelf: 'center', marginLeft: wp('1.5%')}}>
            <SrchIcon name="search" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp('0.5%')}}>
          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(22)}]}>
                  Wagyu Sate
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(14)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(21),
                    fontFamily: 'Roboto-Regular',
                    marginTop: hp('1.3%'),
                  }}>
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(22)}]}>
                  Wagyu Black Pepper
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(14)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(21),
                    fontFamily: 'Roboto-Regular',
                    marginTop: hp('1.3%'),
                  }}>
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(22)}]}>
                  Salad Egg
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(14)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(21),
                    fontFamily: 'Roboto-Regular',
                    marginTop: hp('1.3%'),
                  }}>
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(22)}]}>
                  Salad Tuna
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(14)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(21),
                    fontFamily: 'Roboto-Regular',
                    marginTop: hp('1.3%'),
                  }}>
                  $27.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{marginTop: hp('5%'), marginBottom: hp('1%')}}>
            <CusButton
              text="Add New Product"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push('AddProduct')}
              IconName=""
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: hp('4%'),
            }}>
            <Delete name="delete" size={20} color={'#FF0307'} />
            <Text style={[styles.Deltxt, {fontSize: getFontSize(18)}]}>
              Delete Product
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Searchview: {
    backgroundColor: 'white',
    width: wp('99%'),
    height: hp('9%'),
    marginTop: hp('0.2%'),
    borderRadius: 8,
    borderWidth: wp('0.1%'),
    borderColor: '#d3d3d3',
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 8,
  },
  btn: {
    width: '90%',
    height: hp('9%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  btnTxt: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
  smlfnt: {
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  txtinpt: {
    width: wp('83%'),
    backgroundColor: 'white',
    height: hp('7%'),
    fontFamily: 'Roboto-Regular',
    color: 'black',
    marginTop: hp('0.8%'),
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
  },
  Deltxt: {
    color: '#FF0307',
    marginLeft: wp('1%'),
    fontFamily: 'Roboto-Regular',
  },
});

//make this component availabel to the app
export default ListProduct;
