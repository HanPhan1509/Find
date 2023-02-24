import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {listProduct} from '../../data/home';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ManagerProductView = ({
  onPressItemProduct,
  onLongPressItemProduct,
  onPressBack,
  onPressAddProduct,
  listProductFull,
  isLoading,
}) => {
  const renderItem = ({item}) => {
    const onPressItem = () => {
      onPressItemProduct(item);
    };
    const onLongPressItem = () => {
      onLongPressItemProduct(item);
    };

    return (
      <TouchableOpacity
        onLongPress={onLongPressItem}
        onPress={onPressItem}
        style={styles.viewItem}>
        <Image style={styles.imageItem} source={{uri: item.image}} />
        <View style={styles.viewTextItem}>
          <Text style={styles.textItem}>{item.name}</Text>
          <Text style={styles.textItem}>{item.priceKg}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.view}>
      <Header onPressBack={onPressBack} title={'Product'} />

      <View style={styles.viewFlatList}>
        <Text style={styles.textLong}>{'Long press to delete!'}</Text>
        {isLoading ? (
          <>
            <SkeletonPlaceholder>
              <View style={styles.viewItemLoading} />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={styles.viewItemLoading} />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={styles.viewItemLoading} />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={styles.viewItemLoading} />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={styles.viewItemLoading} />
            </SkeletonPlaceholder>
          </>
        ) : (
          <>
            <FlatList renderItem={renderItem} data={listProductFull} />
          </>
        )}
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          onPress={onPressAddProduct}
          text={'ADD NEW PRODUCT'}
        />
      </View>
    </View>
  );
};

export default ManagerProductView;
