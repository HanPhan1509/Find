import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import ManagerCategoriesView from './view';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';
import uuid from 'react-native-uuid';
import storage, {firebase} from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const ManagerContainerCategories = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIdLoading] = useState(true);
  const [isLoadingEdit, setIdLoadingEdit] = useState(false);
  const [isLoadingAdd, setIdLoadingAdd] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState();
  const [isAdd, setIsAdd] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const addCategory = async url => {
    if (!!name && !!image) {
      const id = uuid.v4();
      await database()
        .ref('/' + table.CATEGORIES)
        .child(id)
        .set({
          id: id,
          logo: url,
          name: name,
        });

      setIsAdd(true);
      setIsEdit(false);
      setCategory(null);
      setName('');
      setImage('');
      setIdLoadingAdd(false);
    }
  };

  const onLongPressItem = async idCategory => {
    Alert.alert('', 'Bạn muốn xóa ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: async () =>
          await database()
            .ref('/' + table.CATEGORIES + '/' + idCategory)
            .remove(),
      },
    ]);
  };

  const editCategory = async url => {
    setIdLoadingEdit(true);
    await database()
      .ref('/' + table.CATEGORIES)
      .child(category.id)
      .set({
        id: category.id,
        logo: url,
        name: name,
      });
    setIsAdd(true);
    setIsEdit(false);
    setCategory(null);

    setName('');
    setImage('');
    setIdLoadingEdit(false);
  };

  const onPressItem = item => {
    setCategory(item);
    setName(item.name);
    setImage(item.logo);
    setIsAdd(false);
    setIsEdit(true);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onChangeTextName = text => {
    setName(text);
  };
  const onChangeTextImage = text => {
    setImage(text);
  };

  const getCategories = async () => {
    const reference = database().ref('/' + table.CATEGORIES);
    await reference.on('value', snapshot => {
      setCategories(objectToArray(snapshot.val()));
      setIdLoading(false);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getCategories();
    }, 1500);
  }, []);

  const openPickerImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const uploadImage = async () => {
    setIdLoadingAdd(true);
    let reference = firebase.storage().ref(image?.replace(/^.*[\\\/]/, ''));
    let task = reference.putFile(image);
    task
      .then(async () => {
        let url = await storage()
          .ref(image.replace(/^.*[\\\/]/, ''))
          .getDownloadURL();
        addCategory(url);
      })
      .catch(e => console.log('uploading image error => ', e));
  };

  const uploadImageEdit = async () => {
    let reference = firebase.storage().ref(image?.replace(/^.*[\\\/]/, ''));
    let task = reference.putFile(image);
    task
      .then(async () => {
        let url = await storage()
          .ref(image.replace(/^.*[\\\/]/, ''))
          .getDownloadURL();
        console.log(url);
        editCategory(url);
      })
      .catch(e => console.log('uploading image error => ', e));
  };

  return (
    <ManagerCategoriesView
      isLoadingEdit={isLoadingEdit}
      isLoadingAdd={isLoadingAdd}
      isAdd={isAdd}
      isEdit={isEdit}
      onPressItem={onPressItem}
      onChangeTextImage={onChangeTextImage}
      onChangeTextName={onChangeTextName}
      name={name}
      image={image}
      openPickerImage={openPickerImage}
      isLoading={isLoading}
      onPressBack={onPressBack}
      addCategory={uploadImage}
      deleteCategory={onLongPressItem}
      editCategory={uploadImageEdit}
      onPressEdit={editCategory}
      categories={categories}
    />
  );
};

export default ManagerContainerCategories;

const styles = StyleSheet.create({});
