import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './style';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';

const ID_ALL_CATEGORY = 'all';

const ManagerCategoriesView = ({
  categories,
  deleteCategory,
  onPressBack,
  isLoading,
  name,
  image,
  onChangeTextImage,
  openPickerImage,
  onChangeTextName,
  onPressItem,

  isAdd,
  isEdit,
  onPressEdit,
  addCategory,

  isLoadingEdit,
  isLoadingAdd,
}) => {
  const renderItemCategory = ({item}) => {
    const onLongPressItem_ = () => {
      deleteCategory(item.id);
    };
    const onPressItem_ = () => {
      onPressItem(item);
    };

    return (
      <>
        {item.id == ID_ALL_CATEGORY || (
          <TouchableOpacity
            onPress={onPressItem_}
            onLongPress={onLongPressItem_}
            style={styles.viewItem}>
            <Text style={styles.textItem}>{item.name}</Text>
            <Image
              resizeMode="contain"
              style={{width: 30, height: 30}}
              source={{uri: item.logo}}
            />
          </TouchableOpacity>
        )}
      </>
    );
  };
  return (
    <View style={styles.view}>
      <Header onPressBack={onPressBack} title={'Categories'} />
      <TextInputLoginLogout
        onChangeText={onChangeTextName}
        value={name}
        style={styles.textInputName}
        text={'Name: '}
      />
      {/* <TextInputLoginLogout
        onChangeText={onChangeTextImage}
        value={image}
        text={'Link image: '}
      /> */}
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
      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={addCategory}
          activeOpacity={isAdd || isLoadingAdd ? 0.5 : 1}
          style={[styles.buttonFunction, isAdd || {backgroundColor: 'grey'}]}>
          {isLoadingAdd ? (
            <>
              <ActivityIndicator size="small" color="white" />
            </>
          ) : (
            <>
              <Text style={styles.textButton}>{'ADD'}</Text>
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressEdit}
          activeOpacity={isEdit || isLoadingEdit ? 0.5 : 1}
          style={[styles.buttonFunction, isEdit || {backgroundColor: 'grey'}]}>
          {isLoadingEdit ? (
            <>
              <ActivityIndicator size="small" color="white" />
            </>
          ) : (
            <>
              <Text style={styles.textButton}>{'EDIT'}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.viewFlatList}>
        {isLoading ? (
          <>
            <ActivityIndicator size="large" color="#00ff00" />
          </>
        ) : (
          <>
            <Text style={styles.textLong}>{'Long press to delete!'}</Text>
            <FlatList renderItem={renderItemCategory} data={categories} />
          </>
        )}
      </View>
    </View>
  );
};

export default ManagerCategoriesView;
