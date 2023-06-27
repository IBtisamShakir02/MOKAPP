import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloScreen from './src/Screens/HelloScreen';
import LogIn from './src/Screens/LogIn';
import LogInEmployee from './src/Screens/LogInEmployee';
import LogInOwner from './src/Screens/LogInOwner';
import SignUp from './src/Screens/SignUp';
const Stack = createNativeStackNavigator();
import Addproduct from './src/Screens/AddProduct';
import ListProduct from './src/Screens/Listproduct';
import PaymentMethod1 from './src/Screens/PaymentMethodInput';
import SpecialMenu from './src/Screens/CashierSpecialMenu';
import ForgotPassword from './src/Screens/ForgotPassword';
import AccountTab from './src/Screens/AccountTab';
import DrawerNav from './src/Screens/Components/Drawer';
import ManageStore from './src/Screens/ManageStore';
import Discount from './src/Screens/Discount';
import Customer from './src/Screens/Customer';
import NewCustomer from './src/Screens/NewCustomer';
import Order from './src/Screens/Order';
import SuccessScreen from './src/Screens/SuccessScreen';
import History from './src/Screens/History';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="LoginEmp"
          component={LogInEmployee}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="LogInOwner"
          component={LogInOwner}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CashierManager"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddProduct"
          component={Addproduct}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Listproduct"
          component={ListProduct}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CashierSpecialMenu"
          component={SpecialMenu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PaymentMethod1"
          component={PaymentMethod1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AccountTab"
          component={AccountTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ManageStore"
          component={ManageStore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Discount"
          component={Discount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Customer"
          component={Customer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewCustomer"
          component={NewCustomer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
