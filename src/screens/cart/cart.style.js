import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  textTitle: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  textLengthProduct: {
    color: 'black',
    fontSize: 18,
    marginTop: 6,
    paddingBottom:10
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  viewItem: {
    paddingBottom: 20,
    borderBottomColor: '#D7D2D2',
    borderWidth: 1,
    borderColor: 'white',
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTextNameItem: {
    marginLeft: 25,
  },
  viewImageText: {
    flexDirection: 'row',
  },
  textItem: {
    color: 'black',
    marginTop: 7,
    fontSize: 15,
  },
  textQualityItem: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  viewQualityItem: {
    backgroundColor: '#6A2EE8',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  textTotal: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  textTotalGrand: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});
export default styles;
