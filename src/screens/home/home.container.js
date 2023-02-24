import React, {useState, useEffect} from 'react';
import HomeView from './home.view';
import {listCategories, listProduct} from '../../data/home';
import {screens} from '../../constants/screenNames';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';

const HomeContainer = ({navigation, route}) => {
  const [idChooseCategories, setIdChooseCategories] = useState('all');
  const [listProduct_, setListProduct_] = useState();
  const [listProductFull, setListProductFull] = useState();
  const [listCategories, setListCategories] = useState();
  const [isLoading, setIdLoading] = useState(true);
  const [isLoadingCate, setIdLoadingCate] = useState(true);

  const onPressItemCategories = id => {
    setIdChooseCategories(id);
    setIdLoading(true);
    setTimeout(() => {
      if (id == 'all') {
        getProductAsync();
      } else {
        setListProduct_(
          listProductFull.filter(product => product.idCategories == id),
        );
      }
      setIdLoading(false);
    }, 500);
  };

  const onPressItemProduct = item => {
    navigation.navigate(screens.DETAIL_SCREEN, {itemProduct: item});
  };

  const getProductAsync = async () => {
    const reference = database().ref('/' + table.PRODUCTS);
    await reference.on('value', snapshot => {
      setListProduct_(objectToArray(snapshot.val()));
      setListProductFull(objectToArray(snapshot.val()));
      setIdLoading(false);
    });
  };
  const getCategories = async () => {
    const reference = database().ref('/' + table.CATEGORIES);
    await reference.on('value', snapshot => {
      const data = objectToArray(snapshot.val());
      data.push({
        name: 'All',
        id: 'all',
        logo: 'https://icons-for-free.com/download-icon-instagram+new+design+logo+social+media+icon-1320184016721987115_256.png',
      });
      data.reverse();
      setListCategories(data);
      setIdLoadingCate(false);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getCategories();
      getProductAsync();
    }, 1500);
  }, []);

  return (
    <HomeView
      isLoading={isLoading}
      onPressItemProduct={onPressItemProduct}
      listProduct={listProduct_}
      onPressItemCategories={onPressItemCategories}
      idChooseCategories={idChooseCategories}
      listCategories={listCategories}
    />
  );
};

export default HomeContainer;
