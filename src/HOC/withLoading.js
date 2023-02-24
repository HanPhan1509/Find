import React from 'react';
import {View, ActivityIndicator} from 'react-native';
// import {connect} from 'react-redux';
// import {getLoadingSelector} from '@redux/loading/selector';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({isLoading, ...props}) {
    return (
      <View style={{flex: 1}}>
        <WrappedComponent {...props} />
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              alignItems: 'center',
              width: '100%',
              height: '100%',
              opacity: 0.5,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}>
              <ActivityIndicator size="large" color={'#333'} />
            </View>
          </View>
        )}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}
export default withLoading;
