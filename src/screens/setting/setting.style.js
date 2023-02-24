import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  textSetting: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
  },
  viewSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#AAAAAA',
    borderWidth: 1,
  },
  buttonLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#FFE194',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  textLogout: {
    color: 'white',
    marginLeft: 30,
    fontSize: 25,
  },
  view: {
    flex: 1,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonAdmin: {
    marginTop: 100,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});
export default styles;
