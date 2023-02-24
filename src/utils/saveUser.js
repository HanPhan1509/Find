import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../constants/nameTableFirebase';

export const storeUser_Id = async value => {
  try {
    await AsyncStorage.setItem(table.USERS_ID, value);
  } catch (e) {}
};

export const getUserID = async value => {
  try {
    return await AsyncStorage.getItem(table.USERS_ID);
  } catch (e) {}
};
