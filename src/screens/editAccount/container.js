import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import {table} from '../../constants/nameTableFirebase';
import styles from './style';
import Toast from 'react-native-toast-message';
import Button from '../../components/Button';

const EditContainer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [id, setID] = useState('');

  const onChangeTextName = text => {
    setName(text);
  };
  const onChangeTextEmail = text => {
    setEmail(text);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const getInFo = async () => {
    const id_user____ = await AsyncStorage.getItem(table.USERS_ID);
    setID(id_user____);

    const reference = database()
      .ref('/' + table.USERS)
      .child(id_user____);
    reference.on('value', snapshot => {
      setUser(snapshot.val());
      setEmail(snapshot.val().email);
      setName(snapshot.val().name);
    });
  };
  const onPressSave = async () => {
    await database()
      .ref('/' + table.USERS)
      .child(id)
      .set({
        ...user,
        name: name,
        email: email,
      });
    showToast();
  };

  React.useEffect(() => {
    getInFo();
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Thông báo!',
      text2: 'Cập nhật thành công!',
    });
  };
  return (
    <View style={styles.view}>
      <Toast />
      <Header onPressBack={onPressBack} title={'Account'} />

      <View style={styles.viewContent}>
        <TextInputLoginLogout
          onChangeText={onChangeTextName}
          value={name}
          placeholder={'Enter text'}
          text={'Name . . .'}
        />
        <View style={styles.view__} />
        <TextInputLoginLogout
          onChangeText={onChangeTextEmail}
          value={email}
          placeholder={'Enter text'}
          text={'Email . . .'}
        />

        <Button text={'Save'} style={styles.buttonSave} onPress={onPressSave} />
      </View>
    </View>
  );
};

export default EditContainer;
