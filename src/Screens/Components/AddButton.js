//import liraries
import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import Plus from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component
const AddButton = ({onPress}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.button}>
          <Plus
            name="plus"
            color="white"
            size={30}
            style={{alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    borderRadius: wp('2%'),
    justifyContent: 'center',
    backgroundColor: '#1A72DD',
    elevation: 3,
    margin: wp('1%'),
    marginBottom: hp('1%'),
  },
});

//make this component available to the app
export default AddButton;
