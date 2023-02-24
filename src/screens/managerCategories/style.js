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
  viewItem: {
    padding: 10,
    backgroundColor: '#00FF00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
  },
  textInputName: {
    marginVertical: 20,
  },
  viewFlatList: {
    padding: 10,
  },
  viewButton: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonFunction: {
    width: 100,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonFunctionDisable: {
    width: 100,
    height: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textItem: {
    color: 'black',
    fontWeight: 'bold',
  },
  view1: {
    flex: 4,
  },
  textLong: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
