import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../components/Header';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Button from '../../components/Button';

const ID_ALL_CATEGORY = 'all';

const EditProductView = ({
  product,
  onPressBack,
  isAddNew,
  onPressButton,
  categories,
  chooseCategories,
  onPressItemCategory,

  nameProduct,
  linkImageProduct,
  priceProduct,
  descriptionProduct,

  onChangeTextNameProduct,
  onChangeTextImageProduct,
  onChangeTextPriceProduct,
  onChangeTextDescriptionProduct,
  image,
  openPickerImage,
}) => {
  const renderItemCate = ({item}) => {
    const onPressItem = () => {
      onPressItemCategory(item.id);
    };
    return (
      <>
        {item.id == ID_ALL_CATEGORY || (
          <TouchableOpacity
            onPress={onPressItem}
            style={[
              styles.viewItem,
              chooseCategories == item.id && styles.viewItemActive,
            ]}>
            <Text
              style={[
                styles.textItem,
                chooseCategories == item.id && styles.textItemActive,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <ScrollView style={styles.view}>
      <Header
        onPressBack={onPressBack}
        title={isAddNew ? 'Add new product' : 'Edit product'}
      />
      {/* <Image
        style={styles.image}
        source={{
          uri:
            product?.image ||
            linkImageProduct ||
            'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
        }}
      /> */}
      <TextInputLoginLogout
        onChangeText={onChangeTextNameProduct}
        value={nameProduct}
        text={'Name:'}
      />
      {/* <TextInputLoginLogout
        onChangeText={onChangeTextImageProduct}
        value={linkImageProduct}
        text={'Link image:'}
      /> */}

      <TextInputLoginLogout
        onChangeText={onChangeTextPriceProduct}
        value={priceProduct}
        text={'Price/kg:'}
      />
      <TextInputLoginLogout
        onChangeText={onChangeTextDescriptionProduct}
        value={descriptionProduct}
        text={'Description:'}
      />
      {!image ? (
        <TouchableOpacity
          onPress={openPickerImage}
          style={{
            backgroundColor: '#F0F0F0',
            width: 100,
            height: 100,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text>Image</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={openPickerImage}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Image style={{width: 100, height: 100}} source={{uri: image}} />
        </TouchableOpacity>
      )}

      <Text style={styles.textCate}>{'Catogaries'}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItemCate}
        data={categories}
      />

      <Button
        onPress={onPressButton}
        style={styles.button}
        text={isAddNew ? 'ADD NEW PRODUCT' : 'SAVE'}
      />
    </ScrollView>
  );
};

export default EditProductView;
