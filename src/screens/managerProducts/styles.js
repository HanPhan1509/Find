import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },

  imageItem: {
    width: 50,
    borderRadius: 10,
    height: 50,
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#00FFFF',
    padding: 5,
  },
  textItem: {
    color: 'black',
  },
  viewTextItem: {
    marginLeft: 20,
  },
  viewFlatList: {
    marginTop: 10,
  },
  textLong: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputSearch: {
    padding: 0,
    margin: 0,
    marginLeft: 10,
  },
  viewItemLoading: {
    width: '100%',
    height: 50,
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  viewButton: {
    flex: 1,
  },
});
export default styles;
