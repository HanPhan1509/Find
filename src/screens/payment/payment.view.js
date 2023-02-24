import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './payment.style';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Button from '../../components/Button';

const PaymentView = props => {
  const {onPressBack, value, onChangeText, total, onPressOder} = props;
  return (
    <View style={styles.view}>
      <Header onPressBack={onPressBack} title={'Payment'} />
      <TextInputLoginLogout
        text={'Nhập địa chỉ'}
        value={value}
        onChangeText={onChangeText}
        placeholder={'Nhập cho tau địa chỉ'}
      />
      <Text
        style={{
          marginTop: 10,
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Tổng tiền: {total}
      </Text>

      <Button text={'Đặt hàng'} style={{marginTop: 20}} onPress={onPressOder} />
    </View>
  );
};

export default PaymentView;
