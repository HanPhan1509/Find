import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';
import Header from '../../components/Header';

const ManagerUser = ({navigation}) => {
  const [users, setUsers] = React.useState([]);

  const getUser = async () => {
    const reference = database().ref('/' + table.USERS);
    await reference.on('value', snapshot => {
      setUsers(objectToArray(snapshot.val()));
      // setIdLoading(false);
    });
  };

  React.useEffect(() => {
    getUser();
  }, []);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#6A2EE8',
          marginTop: 10,
          borderRadius: 10,
          padding: 10,
        }}>
        <Text style={{color: '#fff'}}>{item.name}</Text>
        <Text style={{color: '#fff'}}>{item.email}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Header onPressBack={() => navigation.goBack()} title={'Manager User'} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ManagerUser;

const styles = StyleSheet.create({});
