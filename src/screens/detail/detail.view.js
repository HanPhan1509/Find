import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './detail.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import {currencyFormat} from '../../helpers/currencyFormat';
import Toast from 'react-native-toast-message';

const DetailView = ({
  product,
  quality,
  setQualityReduced,
  setQualityIncrease,
  onPressGoBack,
  idLove,
  onPressLove,
  onPressAddToCart,
}) => {
  return (
    <View style={styles.view}>
     
      <ImageBackground
        style={styles.imageDetail}
        source={{uri: product?.image}}>
        <TouchableOpacity onPress={onPressGoBack} style={styles.iconBack}>
          <Ionicons color={'black'} size={30} name="ios-arrow-back-circle" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.viewContent}>
        <Text style={styles.nameProduct}>{product?.name}</Text>
        <Text style={styles.textPriceProduct}>
          {'RM '} {currencyFormat(product?.priceKg)} {' / per pkg'}
        </Text>

        <View style={styles.viewLoveQuality}>
          <View style={styles.viewQuality}>
            <TouchableOpacity onPress={setQualityReduced}>
              <AntDesign color={'black'} size={25} name="left" />
            </TouchableOpacity>
            <Text style={styles.textQuality}>{quality}</Text>
            <TouchableOpacity onPress={setQualityIncrease}>
              <AntDesign color={'black'} size={25} name="right" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onPressLove}>
            {idLove ? (
              <Ionicons color={'#E7E7E7'} size={40} name="heart-circle" />
            ) : (
              <Ionicons color={'red'} size={40} name="heart-circle-outline" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.textDescription}>{product?.description}</Text>
        <View style={styles.viewButton}>
          <Button
            onPress={onPressAddToCart}
            style={styles.buttonAddCard}
            text={'Add To Cart'}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailView;
