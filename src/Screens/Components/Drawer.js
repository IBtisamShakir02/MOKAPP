//import liraries
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import AccountTab from '../AccountTab';
import Sidebar from '../Components/Sidebar';

const Drawer = createDrawerNavigator();

// create a component
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="CashManager"
        component={BottomNavigation}
        options={{
          headerShown: false,
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
