import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import SignUpView from './view';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import uuid from 'react-native-uuid';
import {storeUser_Id} from '../../utils/saveUser';
import {screens} from '../../constants/screenNames';

const SignUpContainer = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onPressSignUp = async () => {
    if (!!name && !!email && !!password && !!rePassword) {
      if (password != rePassword) {
        Alert.alert('Thông báo!', 'Nhập lại mật khẩu sai !');
      } else {
        // tạo tài khoản:
        const id = uuid.v4();

        await database()
          .ref('/' + table.USERS)
          .child(id)
          .set({
            id: id,
            pasWord: password,
            name: name,
            email: email,
            isAdmin: false,
          });

        // tự login vào đi đến home;
        storeUser_Id(id);
        navigation.reset({
          index: 0,
          routes: [{name: screens.BOTTOM_TAB}],
        });
      }
    } else {
      Alert.alert('Thông báo!', 'Không được để trống !');
    }
  };

  const changeTextName = text => {
    setName(text);
  };
  const changeTextEmail = text => {
    setEmail(text);
  };
  const changeTextPassword = text => {
    setPassword(text);
  };
  const changeTextRePassword = text => {
    setRePassword(text);
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return (
    <SignUpView
      changeTextRePassword={changeTextRePassword}
      changeTextPassword={changeTextPassword}
      changeTextEmail={changeTextEmail}
      changeTextName={changeTextName}
      onPressSignUp={onPressSignUp}
      rePassword={rePassword}
      password={password}
      email={email}
      name={name}
      onPressGoBack={onPressGoBack}
    />
  );
};

export default SignUpContainer;
