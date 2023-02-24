import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartView from './cart.view';
import {listProduct} from '../../data/cart';
import {screens} from '../../constants/screenNames';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContainer = ({navigation}) => {
  const [listProduct_, setlistProduct_] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [id_user, setId_User] = useState('');
  const [isClick, setIsClick] = useState(false);

  const getData = async () => {
    setTimeout(async () => {
      setId_User(await AsyncStorage.getItem(table.USERS_ID));

      if (id_user) {
        const reference = await database().ref('/' + table.CART_USER);

        await reference.child(id_user).on('value', snapshot => {
          setlistProduct_(objectToArray(snapshot.val()));
          // console.log(objectToArray(snapshot.val()), 'sdfsdfsfsfsd');
          let total = 0;
          objectToArray(snapshot.val()).forEach(
            product => (total = total + product.quality * product.priceKg),
          );
          setSubtotal(total);
          setTax(3000);
        });

        setIsClick(true);
      }
    }, 500);
  };

  useEffect(() => {
    getData();
    if (listProduct_.length == 0) {
      setSubtotal(0);
      setTax(0);
    }
  }, [id_user]);

  const onPressDeleteProductInCart = idProduct => {
    Alert.alert('', 'Bạn muốn xóa sản phẩm khỏi giỏ hàng ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: async () => {
          await database()
            .ref('/' + table.CART_USER + '/' + id_user + '/' + idProduct)
            .remove();
        },
      },
    ]);
  };
  const onPressCheckNow = () => {
    if (isClick) {
      if (listProduct_.length == 0) {
        Alert.alert('Không có sản phẩm!');
      } else {
        navigation.navigate(screens.PAYMENT_SCREEN, {
          id_user: id_user,
          products: listProduct_,
          total: subtotal + tax,
        });
      }
    }
  };

  return (
    <CartView
      isClick={isClick}
      id_user={id_user}
      onPressDeleteProductInCart={onPressDeleteProductInCart}
      onPressCheckNow={onPressCheckNow}
      navigation={navigation}
      tax={tax}
      subtotal={subtotal}
      listProduct={listProduct_}
    />
  );
};

export default CartContainer;
