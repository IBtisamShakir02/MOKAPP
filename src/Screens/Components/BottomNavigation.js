//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CashierManager from '../CashierManager';
import CashierSpecialMenu from '../CashierSpecialMenu';
import Order from '../Order';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#1A72DD',
        tabBarStyle: {
          borderTopLeftRadius: wp('3%'),
          borderTopRightRadius: wp('3%'),
          height: hp('6%'),
          backgroundColor: 'white',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="CashierManager"
        component={CashierManager}
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
        name="Order"
        component={Order}
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
