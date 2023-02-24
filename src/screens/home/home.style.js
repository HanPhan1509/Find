import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import {FONT_FAMILY, FONT_SIZE} from './../../constants/fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleScreen: {
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center',
    paddingVertical: 10,
  },
  viewLogo: {
    justifyContent: 'center',
    marginTop: scale(20),
  },
  textContent: {
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
  },
  viewItemCategories: {
    width: 55,
    height: 55,
    marginLeft: 15,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  textItemName: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },
  imageItemLogo: {
    width: 20,
    height: 20,
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundBlue: {
    backgroundColor: '#6A2EE8',
  },
  colorTextWhite: {
    color: 'white',
  },
  textResult: {
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 25,
  },
  itemImageProduct: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  viewCategories: {
    height: 90,
  },
  textItemProduct: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  viewProducts: {
    paddingHorizontal: 25,
  },
  viewItemProduct: {
    width: 155,
    height: 225,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default styles;
