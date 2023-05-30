//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const CusButton = ({text, onPress, IconName, backgroundColor, color}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.button, {backgroundColor}]}>
          <View style={{flexDirection: 'row'}}>
            {IconName
              ? <Icon
                  name={IconName}
                  color="white"
                  size={20}
                  style={{
                    position: 'absolute',
                    marginHorizontal: wp ('5%'),
                  }}
                />
              : null}
            <Text style={[styles.buttonText, {color}]}> {text} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  button: {
    height: hp ('7.5%'),
    width: wp ('60%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '',
    elevation: 10,
  },
  buttonText: {
    flex: 1,
    color: '',
    textTransform: 'uppercase',
    fontSize: RFPercentage (2.3),
    textAlign: 'center',
    fontFamily: 'PTSerif-Bold',
  },
});

//make this component available to the app
export default CusButton;
