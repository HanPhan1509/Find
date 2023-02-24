import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import PaymentView from './payment.view';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const PaymentContainer = ({navigation, route}) => {
  const total = route?.params?.total;
  const products = route?.params?.products;
  const [address, setAddress] = React.useState('');
  const onPressBack = () => {
    navigation.goBack();
  };

  const onChangeText = text => {
    setAddress(text);
  };

  const onPressOder = async () => {
    if (address) {
      const id = uuid.v4();
      const id_user = await AsyncStorage.getItem(table.USERS_ID);
      await database()
        .ref('/' + table.BILLS)
        .child(id_user)
        .child(id)
        .set({
          address: address,
          id: id,
          products: products,
          statusBillID: 0,
          userID: id_user,
        });
      await database()
        .ref('/' + table.CART_USER)
        .child(id_user)
        .remove();

      navigation.goBack();
    } else {
      Alert.alert('Thông báo!', 'Bạn chưa nhập địa chỉ!');
    }
  };
  return (
    <PaymentView
      onPressBack={onPressBack}
      value={address}
      onChangeText={onChangeText}
      total={total}
      onPressOder={onPressOder}
    />
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({});
