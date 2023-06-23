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
            style={[styles.txtinpt, {fontSize: getFontSize(18)}]}
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
            <View activeOpacity={0.5} style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(18)}]}>
                  Wagyu Sate
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(12)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(17),
                    fontWeight: '400',
                    alignSelf: 'center',
                  }}>
                  $27.99
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(18)}]}>
                  Wagyu Black Pepper
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(12)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(17),
                    fontWeight: '400',
                    alignSelf: 'center',
                  }}>
                  $27.99
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(18)}]}>
                  Salad Egg
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(12)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(17),
                    fontWeight: '400',
                    alignSelf: 'center',
                  }}>
                  $27.99
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.btn}>
              <View>
                <Text style={[styles.btnTxt, {fontSize: getFontSize(18)}]}>
                  Salad Tuna
                </Text>
                <Text style={[styles.smlfnt, {fontSize: getFontSize(12)}]}>
                  All Branches
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: getFontSize(17),
                    fontWeight: '400',
                    alignSelf: 'center',
                  }}>
                  $27.99
                </Text>
              </View>
            </View>
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
    width: wp('98%'),
    height: hp('7%'),
    marginTop: hp('0.7%'),
    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  btn: {
    width: '95%',
    height: hp('7%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: wp('2%'),
    marginTop: hp('1%'),
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    alignItems: 'center',
  },
  btnTxt: {
    color: 'black',
    fontWeight: '400',
  },
  smlfnt: {
    color: 'black',
    fontWeight: '400',
  },
  txtinpt: {
    width: wp('83%'),
    backgroundColor: 'white',
    height: hp('5.5%'),
    fontWeight: '400',
    color: 'black',
    marginTop: hp('0.8%'),
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
  },
  Deltxt: {
    color: '#FF0307',
    marginLeft: wp('1%'),
    fontWeight: '400',
  },
});

//make this component availabel to the app
export default ListProduct;
