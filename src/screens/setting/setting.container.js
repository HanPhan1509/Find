import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import SettingView from './setting.view';
import {screens} from '../../constants/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../../constants/nameTableFirebase';

const SettingContainer = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [id_User, setId_User] = useState('');

  React.useEffect(() => {
    getAdmin();
  }, []);
  const getAdmin = async () => {
    const is_admin = await AsyncStorage.getItem(table.ADMIN);
    if (is_admin == 'yes') {
      setAdmin(true);
    }
  };

  const onPressSignIn = () => {
    navigation.navigate(screens.SIGN_IN_SCREEN);
  };
  const onPressAccount = () => {
    navigation.navigate(screens.EDIT_ACCOUNT);
  };
  const onPressChangePass = () => {
    navigation.navigate(screens.CHANGE_PASS);
  };

  const onPressBills = () => {
    navigation.navigate(screens.MANAGER_BILL);
  };
  const onPressUsers = () => {
    navigation.navigate(screens.MANAGER_USER);
  };
  const onPressProducts = () => {
    navigation.navigate(screens.MANAGER_PRODUCT);
  };
  const onPressCategory = () => {
    navigation.navigate(screens.MANAGER_CATEGORY);
  };
  const onPressInfoTeam = () => {
    navigation.navigate(screens.INFO_TEAM);
  };
  const onPressLogout = () => {
    Alert.alert('', 'Bạn muốn đăng xuất ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.removeItem(table.USERS_ID);
          await AsyncStorage.removeItem(table.ADMIN);
          navigation.reset({
            index: 0,
            routes: [{name: screens.BOTTOM_TAB}],
          });
        },
      },
    ]);
  };

  const getUser_id = async () => {
    setId_User(await AsyncStorage.getItem(table.USERS_ID));

    if (id_User) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  React.useEffect(() => {
    getUser_id();
  }, [id_User]);
  return (
    <SettingView
      onPressInfoTeam={onPressInfoTeam}
      onPressUsers={onPressUsers}
      onPressLogout={onPressLogout}
      onPressBills={onPressBills}
      onPressProducts={onPressProducts}
      onPressCategory={onPressCategory}
      admin={admin}
      onPressChangePass={onPressChangePass}
      onPressAccount={onPressAccount}
      onPressSignIn={onPressSignIn}
      isLogin={isLogin}
    />
  );
};

export default SettingContainer;
