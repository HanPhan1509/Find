import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DetailView from './detail.view';
import {getUserID} from '../../utils/saveUser';
import {table} from '../../constants/nameTableFirebase';
import database from '@react-native-firebase/database';

const DetailContainer = ({navigation, route}) => {
  const product = route?.params?.itemProduct;
  const [quality, setQuality] = useState(0);
  const [idLove, setIdLove] = useState(true);

  const setQualityReduced = () => {
    if (quality != 0) {
      setQuality(quality - 1);
    }
  };

  const setQualityIncrease = () => {
    setQuality(quality + 1);
  };

  const onPressAddToCart = async () => {
    const user_id = await getUserID();
    if (user_id) {
      // thêm vào giỏ hàng:
      if (quality != 0) {
        await database()
          .ref('/' + table.CART_USER)
          .child(user_id)
          .child(product.id)
          .set({
            ...product,
            quality: quality,
          });
       navigation.goBack();
      } else {
        Alert.alert('Thông báo!', 'Bạn chưa chọn số lượng !');
      }
    } else {
      Alert.alert('Thông báo!', 'Bạn chưa đăng nhập!');
    }
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };
  const onPressLove = () => {
    setIdLove(!idLove);
  };

  return (
    <DetailView
      onPressAddToCart={onPressAddToCart}
      onPressLove={onPressLove}
      idLove={idLove}
      onPressGoBack={onPressGoBack}
      setQualityReduced={setQualityReduced}
      setQualityIncrease={setQualityIncrease}
      quality={quality}
      product={product}
    />
  );
};

export default DetailContainer;

const styles = StyleSheet.create({});
