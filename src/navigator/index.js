import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../constants/screenNames';
import ChangePassContainer from '../screens/changePassword/container';
import DetailContainer from '../screens/detail/detail.container';
import EditContainer from '../screens/editAccount/container';
import PaymentContainer from '../screens/payment/payment.container';
import SignInContainer from '../screens/signIn/container';
import SignUpContainer from '../screens/signUp/container';
import BottomTab from './BottomTab';

import ManagerCategory from '../screens/managerCategories/container';
import ManagerBill from '../screens/managerBills/container';
import ManagerProduct from '../screens/managerProducts/container';
import ManagerUser from '../screens/managerUsers/managerUser.container';
import EditProductContainer from '../screens/editAddProduct/container';
import InfoTeam from '../screens/info';

const StackFlow = createStackNavigator();
const MyStack = () => {
  return (
    <StackFlow.Navigator>
      <StackFlow.Screen
        name={screens.BOTTOM_TAB}
        component={BottomTab}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.DETAIL_SCREEN}
        component={DetailContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.SIGN_IN_SCREEN}
        component={SignInContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.SIGN_UP_SCREEN}
        component={SignUpContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.EDIT_ACCOUNT}
        component={EditContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.CHANGE_PASS}
        component={ChangePassContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.PAYMENT_SCREEN}
        component={PaymentContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.MANAGER_BILL}
        component={ManagerBill}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.MANAGER_CATEGORY}
        component={ManagerCategory}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.MANAGER_PRODUCT}
        component={ManagerProduct}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.EDIT_PRODUCT}
        component={EditProductContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.MANAGER_USER}
        component={ManagerUser}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.INFO_TEAM}
        component={InfoTeam}
        options={{headerShown: false}}
      />
    </StackFlow.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default AppContainer;
