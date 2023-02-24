import {StyleSheet, Text, View, Alert, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import ChangePassView from './view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../../constants/nameTableFirebase';
import database from '@react-native-firebase/database';

const ChangePassContainer = ({navigation}) => {
  const [user, setUser] = useState({});
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressConfirm = async () => {
    if (!!password && !!newPassword && !!rePassword) {
      if (password == user.pasWord) {
        if (newPassword == rePassword) {
          await database()
            .ref('/' + table.USERS)
            .child(user.id)
            .set({
              ...user,
              pasWord: newPassword,
            });

          ToastAndroid.show('Thành công!', ToastAndroid.SHORT);
          navigation.goBack();
        } else {
          Alert.alert('Thông báo', 'Sai mật khẩu xác nhận!');
        }
      } else {
        Alert.alert('Thông báo', 'Sai mật khẩu hiện tại!');
      }
    }
  };

  const onChangeTextPass = text => {
    setPassword(text);
  };
  const onChangeTextRePass = text => {
    setRePassword(text);
  };
  const onChangeTextNewPass = text => {
    setNewPassword(text);
  };

  const getInFo = async () => {
    const id_user____ = await AsyncStorage.getItem(table.USERS_ID);
    const reference = database()
      .ref('/' + table.USERS)
      .child(id_user____);
    reference.on('value', snapshot => {
      setUser(snapshot.val());
    });
  };

  React.useEffect(() => {
    getInFo();
  }, []);

  return (
    <ChangePassView
      onPressConfirm={onPressConfirm}
      onChangeTextPass={onChangeTextPass}
      onChangeTextRePass={onChangeTextRePass}
      onChangeTextNewPass={onChangeTextNewPass}
      newPassword={newPassword}
      rePassword={rePassword}
      password={password}
      onPressBack={onPressBack}
    />
  );
};

export default ChangePassContainer;
