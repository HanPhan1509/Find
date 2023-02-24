import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import styles from './bill.style';
import {table} from '../../constants/nameTableFirebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import {objectToArray} from '../../utils/apiFirebase';
import AnimatedLottieView from 'lottie-react-native';
import loadBill from '../../assets/images/load_bill.json';

const BillView = ({navigation}) => {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderItemBill = ({item}) => {
    const total = () => {
      let t = 0;
      item.products.map(o => {
        t = t + o.priceKg * o.quality;
      });
      return t;
    };

    return (
      <View style={styles.viewItemDetail}>
        <FlatList
          data={item.products}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Image
                style={{width: 35, height: 35}}
                source={{uri: item.image}}
              />
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {item.name}
              </Text>
            </View>
          )}
        />
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text>
            {item.products.length} {'products'} {'Into money: '}
            {total()}
          </Text>

          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              padding: 5,
              backgroundColor: item.statusBillID == 0 ? 'red' : 'black',
            }}>
            {item.statusBillID == 0 ? 'Đơn chưa xác nhận!' : 'Đã xác nhận'}
          </Text>
        </View>
      </View>
    );
  };

  const getData = () => {
    setIsLoading(true);
    setBills([]);
    setTimeout(async () => {
      const reference = await database().ref('/' + table.BILLS);
      await reference
        .child(await AsyncStorage.getItem(table.USERS_ID))
        .on('value', snapshot => {
          setBills(objectToArray(snapshot.val()));
        });
      setIsLoading(false);
    }, 1500);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.textTitle}>Bills</Text>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <AnimatedLottieView
            style={{width: 50, height: 50}}
            source={loadBill}
            autoPlay
            loop
          />
        </View>
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={'rgb(241,197,18)'}
                removeClippedSubviews={true}
                refreshing={false}
                onRefresh={() => getData()}
              />
            }
            renderItem={renderItemBill}
            data={bills}
          />
        </>
      )}
    </View>
  );
};

export default BillView;
