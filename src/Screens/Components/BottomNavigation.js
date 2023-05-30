//import liraries
import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cashier1 from '../Cashier1';
import CashierSpecialMenu from '../CashierSpecialMenu';
import CashierManualInput from '../CashierManualInput';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component

const Tab = createBottomTabNavigator ();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#1A72DD',
        tabBarStyle: {
          borderTopLeftRadius: wp ('3%'),
          borderTopRightRadius: wp ('3%'),
          height: hp ('8%'),
          backgroundColor: 'white',
        },
      }}
    >
      <Tab.Screen
        name="Cashier"
        component={Cashier1}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="food-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SpecialMenu"
        component={CashierSpecialMenu}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="star-outline" color={color} size={37} />
          ),
        }}
      />
      <Tab.Screen
        name="ManualInput"
        component={CashierManualInput}
        options={{
          tabBarIcon: ({color}) => (
            <FoundationIcons name="clipboard-pencil" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
