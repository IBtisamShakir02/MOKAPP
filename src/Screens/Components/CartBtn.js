//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const CartBtn = ({text, onPress, IconName}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <View style={{flexDirection: 'row'}}>
          {IconName
            ? <Icon
                name={IconName}
                color="white"
                size={25}
                style={{
                  position: 'absolute',
                  marginHorizontal: wp ('5%'),
                  marginVertical: hp ('-0.2%'),
                }}
              />
            : null}
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create ({
  button: {
    height: hp ('8%'),
    width: wp ('80%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#1A72DD',
    elevation: 20,
  },
  buttonText: {
    flex: 1,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: RFPercentage (2.1),
    textAlign: 'right',
    marginRight: wp ('5%'),
    fontFamily: 'PTSerif-Bold',
  },
});

//make this component available to the app
export default CartBtn;
