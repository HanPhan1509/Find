import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import EditProductView from './view';
import {listCategories} from '../../data/home';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import {objectToArray} from '../../utils/apiFirebase';
import storage, {firebase} from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const EditProductContainer = ({route, navigation}) => {
  const product = route?.params?.product || null;
  const [isAddNew, setIsAddNew] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [chooseCategories, setChooseCategories] = React.useState(
    listCategories[1].id,
  );

  const [nameProduct, setNameProduct] = useState('');
  const [linkImageProduct, setLinkImageProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [idProduct, setIdProduct] = useState('');

  const onChangeTextNameProduct = text => {
    setNameProduct(text);
  };
  const onChangeTextImageProduct = text => {
    setLinkImageProduct(text);
  };
  const onChangeTextPriceProduct = text => {
    setPriceProduct(text);
  };
  const onChangeTextDescriptionProduct = text => {
    setDescriptionProduct(text);
  };

  const getCategories = async () => {
    const reference = database().ref('/' + table.CATEGORIES);
    await reference.on('value', snapshot => {
      setCategories(objectToArray(snapshot.val()).reverse());
    });
  };

  React.useEffect(() => {
    if (product) {
      setIsAddNew(false);
      setNameProduct(product.name);
      setLinkImageProduct(product.image);
      setPriceProduct(product.priceKg);
      setDescriptionProduct(product.description);
      setChooseCategories(product.idCategories);
      setIdProduct(product.id);
    } else {
      setIdProduct(uuid.v4());
    }

    getCategories();
  }, []);

  const onPressBack = () => {
    Alert.alert('', 'Bạn muốn bỏ qua những thay đổi ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  const openPickerImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setLinkImageProduct(image.path);
    });
  };

  const uploadImage = async () => {
    let reference = firebase
      .storage()
      .ref(linkImageProduct?.replace(/^.*[\\\/]/, ''));
    let task = reference.putFile(linkImageProduct);
    task
      .then(async () => {
        let url = await storage()
          .ref(linkImageProduct.replace(/^.*[\\\/]/, ''))
          .getDownloadURL();
        onPressButton(url);
      })
      .catch(e => console.log('uploading image error => ', e));
  };

  const onPressButton = async url => {
    if (isAddNew) {
      // tạo sản phẩm mới
      try {
        parseInt(priceProduct);
        await database()
          .ref('/' + table.PRODUCTS)
          .child(idProduct)
          .set({
            id: idProduct,
            image: url,
            name: nameProduct,
            priceKg: parseInt(priceProduct),
            idCategories: chooseCategories,
            description: descriptionProduct,
          });
        navigation.goBack();
      } catch (error) {
        Alert.alert('Lỗi!', 'Bạn nhập sai dữ liệu !');
        console.log(error);
      }
    } else {
      // chỉnh sửa
      try {
        parseInt(priceProduct);
        await database()
          .ref('/' + table.PRODUCTS)
          .child(idProduct)
          .set({
            id: idProduct,
            image: linkImageProduct,
            name: nameProduct,
            priceKg: parseInt(priceProduct),
            idCategories: chooseCategories,
            description: descriptionProduct,
          });
        navigation.goBack();
      } catch (error) {
        Alert.alert('Lỗi!', 'Bạn nhập sai dữ liệu !');
        console.log(error);
      }
    }
  };
  const onPressItemCategory = idCate => {
    setChooseCategories(idCate);
  };

  return (
    <EditProductView
      onChangeTextNameProduct={onChangeTextNameProduct}
      onChangeTextImageProduct={onChangeTextImageProduct}
      onChangeTextPriceProduct={onChangeTextPriceProduct}
      onChangeTextDescriptionProduct={onChangeTextDescriptionProduct}
      nameProduct={nameProduct}
      linkImageProduct={linkImageProduct}
      priceProduct={priceProduct}
      descriptionProduct={descriptionProduct}
      onPressItemCategory={onPressItemCategory}
      chooseCategories={chooseCategories}
      categories={categories}
      onPressButton={uploadImage}
      isAddNew={isAddNew}
      onPressBack={onPressBack}
      product={product}
      image={linkImageProduct}
      openPickerImage={openPickerImage}
    />
  );
};

export default EditProductContainer;
