import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import ManagerProductView from './view';
import {screens} from '../../constants/screenNames';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';

const ManagerContainer = ({navigation}) => {
  const [listProductFull, setListProductFull] = useState();
  const [isLoading, setIdLoading] = useState(true);
  
  const onPressItemProduct = item => {
    navigation.navigate(screens.EDIT_PRODUCT, {product: item});
  };

  const onPressAddProduct = () => {
    navigation.navigate(screens.EDIT_PRODUCT);
  };

  const onLongPressItemProduct = item => {
    Alert.alert('', 'Bạn muốn xóa sản phẩm này ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: async () =>
          await database()
            .ref('/' + table.PRODUCTS + '/' + item.id)
            .remove(),
      },
    ]);
  };

  const onPressBack = item => {
    navigation.goBack();
  };

  const getProductAsync = async () => {
    const reference = database().ref('/' + table.PRODUCTS);
    await reference.on('value', snapshot => {
      setListProductFull(objectToArray(snapshot.val()));
      setIdLoading(false);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getProductAsync();
    }, 1500);
  }, []);

  return (
    <ManagerProductView
      isLoading={isLoading}
      listProductFull={listProductFull}
      onPressAddProduct={onPressAddProduct}
      onPressBack={onPressBack}
      onLongPressItemProduct={onLongPressItemProduct}
      onPressItemProduct={onPressItemProduct}
    />
  );
};

export default ManagerContainer;
