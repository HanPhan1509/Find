import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import ManagerBillView from './view';
import Header from '../../components/Header';
import styles from './style';
import {table} from '../../constants/nameTableFirebase';
import {objectToArray} from '../../utils/apiFirebase';
import database from '@react-native-firebase/database';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AnimatedLottieView from 'lottie-react-native';
import load from '../../assets/images/load_bill_mana.json';

const ManagerBillContainer = ({navigation}) => {
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
    const onPressItem = () => {
      onPressBill(item);
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
          <TouchableOpacity onPress={onPressItem}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                padding: 5,
                backgroundColor: item.statusBillID == 0 ? 'red' : 'black',
              }}>
              {item.statusBillID == 0 ? 'Đơn chưa xác nhận!' : 'Đã xác nhận'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onPressBill = async item => {
   await database()
      .ref('/' + table.BILLS)
      .child(item.userID)
      .child(item.id)
      .child('statusBillID')
      .set(1);
      setBills([]);
      getData();
  };

  const getData = () => {
    setIsLoading(true);
    setBills([]);
    setTimeout(async () => {
      let bills___ = [];
      const reference = await database().ref('/' + table.BILLS);
      await reference.on('value', snapshot => {
        objectToArray(snapshot.val()).forEach(bill => {
          database()
            .ref('/' + table.BILLS)
            .child(bill.id)
            .on('value', snapshot_ => {
              objectToArray(snapshot_.val()).forEach(a => {
                bills___.push(a);
              });
              setBills(bills___);
            });
        });
      });
      setIsLoading(false);
    }, 1500);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.view}>
      <Header title={'Bills'} onPressBack={() => navigation.goBack()} />
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <AnimatedLottieView
            style={{width: 100, height: 100}}
            source={load}
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

export default ManagerBillContainer;
