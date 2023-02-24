import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {screens} from '../constants/screenNames';
import HomeScreen from '../screens/home/home.container';
import CartScreen from '../screens/cart/cart.container';
import BillScreen from '../screens/bill/bill.container';
import SettingScreen from '../screens/setting/setting.container';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();
function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#6A2EE8',
        tabBarShowLabel: false,
        tabBarStyle: {height: 60},
      })}>
      <Tab.Screen
        name={screens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
              <FontAwesome name="home" color={color} size={size} />
              <Text style={{color: color}}>{'Home'}</Text>
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screens.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
              <FontAwesome name="shopping-cart" color={color} size={size} />
              <Text style={{color: color}}>{'Cart'}</Text>
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screens.BILL_SCREEN}
        component={BillScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
              <FontAwesome name="reorder" color={color} size={size} />
              <Text style={{color: color}}>{'Bill'}</Text>
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screens.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
               <AntDesign name="setting" size={size} color={color} />
              <Text style={{color: color}}>{'Setting'}</Text>
            </>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
