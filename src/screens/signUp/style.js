import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewLogo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignIn: {
    color: 'black',
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },
  viewTextInput: {
    flex: 0.7,
    padding: 25,
  },
  cusTomTextInput: {
    marginBottom: 30,
  },
  buttonCreateNow: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50
  },
  textCreateNow: {
    color: '#433FFF',
    fontWeight: 'bold',
    width: 180,
    textAlign: 'center',
    fontSize: 16,
  },
});
export default styles;
