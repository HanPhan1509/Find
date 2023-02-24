import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const WithCheckConnection = WrappedComponent => {
  return props => {
    const [isConnectWifi, setIsConnectWifi] = useState(true);
    useEffect(() => {
      const connect = NetInfo.addEventListener(state => {
        setIsConnectWifi(state.isConnected);
      });
      return () => {
        connect();
      };
    }, []);
    return (
      <View style={style.container}>
        {isConnectWifi || (
          <View style={style.viewConnectInternet}>
            <Text style={style.titleInternet}>Can't connect internet</Text>
          </View>
        )}
        <WrappedComponent {...props} />
      </View>
    );
  };
};
export default WithCheckConnection;
const style = StyleSheet.create({
  titleInternet: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  viewConnectInternet: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
