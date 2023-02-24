import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  button: {
    marginTop: 50,
  },
  textCate: {
    color: 'black',
    marginTop: 20,
  },
  textItem: {
    color: 'grey',
    padding: 5,
  },
  textItemActive: {
    color: 'white',
    padding: 5,
  },
  viewItemActive: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    backgroundColor:'red'
  },
  viewItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
  },
});
export default styles;
