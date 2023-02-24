import {table} from '../constants/nameTableFirebase';
import database from '@react-native-firebase/database';

export const objectToArray = (object, nameKey = 'id') => {
  const objectArr = [];
  for (const key in object) {
    const newObject = {...object[key], [nameKey]: key};
    if (Object.prototype.hasOwnProperty.call(object, key))
      objectArr.push(newObject);
  }
  return objectArr;
};

// getDataProducts ;
export const getAllProduct = () => {
  const reference = database().ref('/' + table.PRODUCTS);
   reference.on('value', snapshot => {
    return objectToArray(snapshot.val());
  });
};
