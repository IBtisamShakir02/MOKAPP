import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloScreen from './src/Screens/HelloScreen';
import LogIn from './src/Screens/LogIn';
import LogInEmployee from './src/Screens/LogInEmployee';
import LogInOwner from './src/Screens/LoogInOwner';
import createaccount from './src/Screens/createaccount';
const Stack = createNativeStackNavigator();
import MIcon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native';
import Addproduct from './src/Screens/AddProduct';
import {RFPercentage} from 'react-native-responsive-fontsize';
import ListProduct from './src/Screens/Listproduct';
import CashierManualInput from './src/Screens/CashierManualInput';
import PaymentMethod1 from './src/Screens/PaymentMethodInput';
import SpecialMenu from './src/Screens/CashierSpecialMenu';
import BottomNavigation from './src/Screens/Components/BottomNavigation';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'SignUp',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* LogIn */}
        <Stack.Screen
          name="SignIn"
          component={LogIn}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'LogIn',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* LogIn Employee */}
        <Stack.Screen
          name="LoginEmp"
          component={LogInEmployee}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Employee',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: true,
          }}
        />

        {/* LogIn Owner */}
        <Stack.Screen
          name="LogInOwner"
          component={LogInOwner}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Owner',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: true,
          }}
        />

        {/* Cashier */}
        <Stack.Screen
          name="Cashier1"
          component={BottomNavigation}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: 'white'},
            title: 'Cashier',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginTop: hp('1%')}}>
                <MIcon name="menu" size={30} color="#1A72DD" />
              </TouchableOpacity>
            ),
          }}
        />

        {/* Add Product */}
        <Stack.Screen
          name="AddProduct"
          component={Addproduct}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Add Product',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(3.5),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginTop: hp('1%')}}>
                <MIcon name="menu" size={30} color="#1A72DD" />
              </TouchableOpacity>
            ),
          }}
        />

        {/* List Product */}
        <Stack.Screen
          name="Listproduct"
          component={ListProduct}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: true,
            title: 'List Product',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(3.5),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* Cashier Special Menu */}
        <Stack.Screen
          name="CashierSpecialMenu"
          component={SpecialMenu}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Cashier',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(3.5),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginTop: hp('1%')}}>
                <MIcon name="menu" size={30} color="#1A72DD" />
              </TouchableOpacity>
            ),
          }}
        />

        {/* Cashier Manual Input */}
        <Stack.Screen
          name="CashierManIn"
          component={CashierManualInput}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Cashier',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(3.5),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginTop: hp('1%')}}>
                <MIcon name="menu" size={30} color="#1A72DD" />
              </TouchableOpacity>
            ),
          }}
        />

        {/* Payment Method */}
        <Stack.Screen
          name="PaymentMethod1"
          component={PaymentMethod1}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Payment Method',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(3.5),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginTop: hp('1%')}}>
                <MIcon name="menu" size={30} color="#1A72DD" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: false,
            title: 'Recover Password',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AccountTab"
          component={AccountTab}
          options={{
            headerShown: true,
            headerTintColor: '#1A72DD',
            headerShadowVisible: true,
            title: 'Account',
            headerTitleStyle: {
              color: '#1A72DD',
              fontSize: RFPercentage(4),
              fontWeight: '500',
              fontFamily: 'PTSerif-Bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
