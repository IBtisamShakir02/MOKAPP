import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloScreen from './src/Screens/HelloScreen';
import LogIn from './src/Screens/LogIn';
import LogInEmployee from './src/Screens/LogInEmployee';
import LogInOwner from './src/Screens/LoogInOwner';
import createaccount from './src/Screens/createaccount';
const Stack = createNativeStackNavigator();
import Addproduct from './src/Screens/AddProduct';
import ListProduct from './src/Screens/Listproduct';
import CashierManualInput from './src/Screens/CashierManualInput';
import PaymentMethod1 from './src/Screens/PaymentMethodInput';
import SpecialMenu from './src/Screens/CashierSpecialMenu';
import BottomNavigation from './src/Screens/Components/BottomNavigation';
import ForgotPassword from './src/Screens/ForgotPassword';
import AccountTab from './src/Screens/AccountTab';


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

        {/* Create Account */}
        <Stack.Screen
          name="CreateAccount"
          component={createaccount}
          options={{
            headerShown: false,
          }}
        />

        {/* LogIn */}
        <Stack.Screen
          name="SignIn"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />

        {/* LogIn Employee */}
        <Stack.Screen
          name="LoginEmp"
          component={LogInEmployee}
          options={{
            headerShown: false,
          }}
        />

        {/* LogIn Owner */}
        <Stack.Screen
          name="LogInOwner"
          component={LogInOwner}
          options={{
            headerShown: false,
          }}
        />

        {/* Cashier */}
        <Stack.Screen
          name="Cashier1"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        
        {/* Add Product */}
        <Stack.Screen
          name="AddProduct"
          component={Addproduct}
          options={{
            headerShown: false,
          }}
        />

        {/* List Product */}
        <Stack.Screen
          name="Listproduct"
          component={ListProduct}
          options={{
            headerShown: false,
          }}
        />

        {/* Cashier Special Menu */}
        <Stack.Screen
          name="CashierSpecialMenu"
          component={SpecialMenu}
          options={{
            headerShown: false,
          }}
        />

        {/* Cashier Manual Input */}
        <Stack.Screen
          name="CashierManIn"
          component={CashierManualInput}
          options={{
            headerShown: false,
          }}
        />

        {/* Payment Method */}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
