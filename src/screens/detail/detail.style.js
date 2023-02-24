import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  imageDetail: {
    width: '100%',
    height: 260,
  },
  nameProduct: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewContent: {
    padding: 30,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -25,
    backgroundColor: 'white',
  },
  textPriceProduct: {
    color: 'black',
    marginTop: 7,
    fontSize: 15,
  },
  textQuality: {
    color: 'black',
    fontSize: 30,
  },
  viewQuality: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
  },
  viewLoveQuality: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomColor: '#D7D2D2',
    paddingBottom: 10,
    borderColor: 'white',
    alignItems: 'center',
    marginTop: 15,
  },
  textDescription: {
    color: 'black',
    marginTop: 25,
    lineHeight: 25,
  },
  buttonAddCard: {
    position: 'absolute',
    bottom: 0,
  },
  viewButton: {
    flex: 1,
  },
  iconBack: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
  },
});
export default styles;
