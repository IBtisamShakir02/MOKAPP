//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {SelectList} from 'react-native-dropdown-select-list';
import CusButton from './Components/CusButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const Addproduct = ({navigation}) => {
  const [Selected, setSelected] = useState ('');

  const data = [
    {key: '1', value: 'Salad'},
    {key: '2', value: 'Stake'},
    {key: '3', value: 'Pasta'},
    {key: '4', value: 'Burger'},
    {key: '5', value: 'Drinks'},
  ];

  const data1 = [
    {key: 'a', value: 'Islamabad'},
    {key: 'b', value: 'Lahore'},
    {key: 'c', value: 'Faisalabad'},
    {key: 'd', value: 'Karachi'},
    {key: 'e', value: 'Multan'},
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <SafeAreaView>

        <View>
          <Text style={styles.Detailstxt}>Product Details:</Text>
          <Text style={styles.Nametxt}>Product Name</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Product Name"
            placeholderTextColor={'grey'}
            keyboardType="default"
          />
          <Text style={styles.Nametxt}>Selling Price</Text>
          <TextInput
            style={styles.field}
            placeholder="$10.00"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text style={styles.Detailstxt}>Add Type Price</Text>
        </View>

        <View style={styles.Typeview}>
          <Text style={styles.Typeviewtxt}>Dine In</Text>
          <TextInput
            style={styles.Typefiled}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={styles.Typeviewtxt}>Take Away</Text>
          <TextInput
            style={styles.Typefiled}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={styles.Typeviewtxt}>Delivery</Text>
          <TextInput
            style={styles.Typefiled}
            placeholder="$20.99"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
        </View>

        <Text style={styles.Detailstxt}>Add On Details (Optional)</Text>

        <View style={styles.Picview}>
          <Image
            source={require ('../Screens/assets/images/gallery.png')}
            style={{
              marginTop: hp ('1.8%'),
              marginHorizontal: wp ('3%'),
            }}
          />
          <TouchableOpacity style={styles.Butn} activeOpacity={0.8}>
            <Text style={styles.Butntxt}>Choose Photo</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.Nametxt}>Categories</Text>
          <SelectList
            setSelected={val => setSelected (val)}
            data={data}
            save="value"
            boxStyles={{
              width: wp ('90%'),
              alignSelf: 'center',
              marginTop: hp ('2%'),
              backgroundColor: '#EBEEEE',
              elevation: 5,
            }}
            inputStyles={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'PTSerif-Regular',
            }}
            dropdownTextStyles={{
              color: 'black',
              fontSize: RFPercentage (2.3),
              textAlign: 'center',
              fontFamily: 'PTSerif-Regular',
            }}
            dropdownStyles={{
              width: wp ('90%'),
              marginLeft: wp ('5%'),
              height: hp ('27%'),
              backgroundColor: '#EBEEEE',
              elevation: RFPercentage (2),
              marginBottom: hp ('-3%'),
            }}
            defaultOption={{key: '1', value: 'Salad'}}
          />
          <Text style={styles.Nametxt}>Capital Price</Text>
          <TextInput
            style={styles.field}
            placeholder="$10.80"
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
          />
          <Text style={styles.Nametxt}>Stock Keeping Unit</Text>
          <TextInput
            style={styles.field}
            placeholder="H454564"
            placeholderTextColor={'grey'}
            keyboardType="name-phone-pad"
          />
          <Text style={styles.Nametxt}>BarCode</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

          <TextInput
            style={styles.field}
            placeholder="4564564"
            placeholderTextColor={'grey'}
            keyboardType="default"
          />

        </View>

        <View>
          <Text style={styles.Nametxt}>Branch</Text>
          <SelectList
            setSelected={val1 => setSelected (val1)}
            data={data1}
            save="value"
            boxStyles={{
              width: wp ('90%'),
              alignSelf: 'center',
              marginTop: hp ('2%'),
              backgroundColor: '#EBEEEE',
              elevation: 5,
            }}
            inputStyles={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'PTSerif-Regular',
            }}
            dropdownTextStyles={{
              color: 'black',
              fontSize: RFPercentage (2.3),
              textAlign: 'center',
              fontFamily: 'PTSerif-Regular',
            }}
            dropdownStyles={{
              width: wp ('90%'),
              marginLeft: wp ('5%'),
              height: hp ('27%'),
              backgroundColor: '#EBEEEE',
              elevation: RFPercentage (2),
              marginBottom: hp ('-3%'),
            }}
            defaultOption={{key: 'a', value: 'Islamabad'}}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: hp ('5%'),
              marginBottom: hp ('8%'),
            }}
          >
            <CusButton
              text="Add Product"
              backgroundColor={'#1A72DD'}
              color={'white'}
              onPress={() => navigation.push ('Listproduct')}
            />
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  Detailstxt: {
    color: 'black',
    fontSize: RFPercentage (3),
    marginTop: hp ('2.5%'),
    marginLeft: wp ('5%'),
    marginBottom: hp ('0.7%'),
    fontFamily: 'PTSerif-Bold',
  },
  Nametxt: {
    color: 'black',
    fontSize: RFPercentage (2.7),
    fontFamily: 'PTSerif-Regular',
    marginStart: wp ('5%'),
    marginTop: hp ('2.5%'),
  },
  field: {
    borderColor: 'white',
    borderRadius: 15,
    width: wp ('90%'),
    alignSelf: 'center',
    marginTop: hp ('0.8%'),
    backgroundColor: '#EBEEEE',
    fontFamily: 'PTSerif-Regular',
    color: '#2A3256',
    fontSize: RFPercentage (2.4),
    height: hp ('8%'),
    paddingHorizontal: wp ('5%'),
    elevation: 5,
  },
  Typeview: {
    backgroundColor: '#EBEEEE',
    width: wp ('90%'),
    height: hp ('45%'),
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: hp ('0.7%'),
  },

  Typeviewtxt: {
    color: 'black',
    fontSize: RFPercentage (2.4),
    fontFamily: 'PTSerif-Bold',
    marginLeft: wp ('5%'),
    marginTop: hp ('2.3%'),
  },

  Typefiled: {
    borderColor: 'black',
    borderWidth: wp ('0.1%'),
    borderRadius: 10,
    width: wp ('80%'),
    alignSelf: 'center',
    marginTop: hp ('1.5%'),
    backgroundColor: '#EBEEEE',
    fontFamily: 'PTSerif-Regular',
    color: '#2A3256',
    fontSize: RFPercentage (2.2),
    height: hp ('7%'),
    paddingHorizontal: wp ('4%'),
    elevation: 5,
  },
  Picview: {
    backgroundColor: 'white',
    width: wp ('90%'),
    height: hp ('11.3%'),
    alignSelf: 'center',
    borderWidth: wp ('0.3%'),
    borderRadius: 9,
    marginTop: hp ('0.%'),
    borderColor: '#2A3256',
    flexDirection: 'row',
  },
  Butn: {
    height: wp ('13%'),
    width: wp ('37%'),
    backgroundColor: '#2A3256',
    borderRadius: 10,
    margin: '5%',
    marginHorizontal: wp ('27%'),
    elevation: 5,
  },
  Butntxt: {
    color: 'white',
    fontSize: RFPercentage (2.5),
    textAlign: 'center',
    marginTop: hp ('1.5%'),
    fontFamily: 'PTSerif-Bold',
  },
});

//make this component available to the app
export default Addproduct;
