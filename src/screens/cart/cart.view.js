import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './cart.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {currencyFormat} from '../../helpers/currencyFormat';
import {screens} from '../../constants/screenNames';

const CartView = ({
  listProduct,
  subtotal,
  tax,
  navigation,
  onPressCheckNow,
  onPressDeleteProductInCart,
  id_user,
  isClick,
}) => {
  const renderItemProductCart = ({item}) => {
    const onPressItem = () => {
      navigation.navigate(screens.DETAIL_SCREEN, {itemProduct: item});
    };
    const onLongPressItem = () => {
      onPressDeleteProductInCart(item.id);
    };
    return (
      <TouchableOpacity
        onLongPress={onLongPressItem}
        onPress={onPressItem}
        style={styles.viewItem}>
        <View style={styles.viewImageText}>
          <Image style={styles.imageItem} source={{uri: item.image}} />
          <View style={styles.viewTextNameItem}>
            <Text style={styles.textItem}>{item.name}</Text>
            <Text style={styles.textItem}>
              {'RM '} {currencyFormat(item.priceKg)} {' / per pkg'}
            </Text>
          </View>
        </View>
        <View style={styles.viewQualityItem}>
          <Text style={styles.textQualityItem}>{item.quality}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.view}>
      <Text style={styles.textTitle}>Cart</Text>

      <Text
        style={
          styles.textLengthProduct
        }>{`Product(${listProduct.length})`}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItemProductCart}
        data={listProduct}
      />

      <View>
        <View style={styles.viewTotal}>
          <Text style={styles.textTotal}>{'Subtotal:'}</Text>
          <Text style={styles.textTotal}>{currencyFormat(subtotal)}</Text>
        </View>
        <View style={styles.viewTotal}>
          <Text style={styles.textTotal}>{'Tax:'}</Text>
          <Text style={styles.textTotal}>{currencyFormat(tax)}</Text>
        </View>
        <View style={styles.viewTotal}>
          <Text style={styles.textTotalGrand}>{'Grand Total:'}</Text>
          <Text style={styles.textTotalGrand}>
            {currencyFormat(subtotal + tax)}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={isClick ? 0.5 : 1}
          style={[
            {
              backgroundColor: isClick ? '#6A2EE8' : 'rgba(101, 90, 198, 0.5)',
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            },
            styles.button,
          ]}
          onPress={onPressCheckNow}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            {'Checkout Now'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartView;
