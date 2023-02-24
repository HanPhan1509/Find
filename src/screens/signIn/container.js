import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import SignInView from './view';
import {screens} from '../../constants/screenNames';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInContainer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const onPressCreateNow = () => {
    navigation.navigate(screens.SIGN_UP_SCREEN);
  };
  const onPressReturn = () => {
    navigation.goBack();
  };
  const onPressSignIn = async () => {
    let checkEmail = false;

    let u = {};
    users.forEach(user => {
      if (user.email == email && user.pasWord == password) {
        checkEmail = true;
        u = user;
      }
    });
    if (checkEmail) {
      await AsyncStorage.setItem(table.USERS_ID, u.id);

      if (u.isAdmin == true) {
        await AsyncStorage.setItem(table.ADMIN, 'yes');
      }

      navigation.reset({
        index: 0,
        routes: [{name: screens.BOTTOM_TAB}],
      });
    } else {
      Alert.alert('Thông báo!', 'Sai tên tài khoản hoặc mật khẩu!');
    }
  };

  const getUsers = async () => {
    const reference = database().ref('/' + table.USERS);
    await reference.on('value', snapshot => {
      setUsers(objectToArray(snapshot.val()));
    });
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const onChangeTextEmail = text => {
    setEmail(text);
  };
  const onChangeTextPass = text => {
    setPassword(text);
  };

  return (
    <SignInView
      onPressSignIn={onPressSignIn}
      onChangeTextEmail={onChangeTextEmail}
      onChangeTextPass={onChangeTextPass}
      password={password}
      email={email}
      onPressReturn={onPressReturn}
      onPressCreateNow={onPressCreateNow}
    />
  );
};

export default SignInContainer;
