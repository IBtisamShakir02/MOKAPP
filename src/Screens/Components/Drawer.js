//import liraries
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import BottomNavigation from './BottomNavigation';
import AccountTab from '../AccountTab';

const Drawer = createDrawerNavigator();

// create a component
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: widthPercentageToDP('60%'),
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name="Cashier"
        component={BottomNavigation}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#1A72DD',
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default DrawerNav;
