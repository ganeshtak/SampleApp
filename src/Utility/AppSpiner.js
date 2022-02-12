import React, {useEffect} from 'react';
import {View, ActivityIndicator, Modal, Text} from 'react-native';
import { Store } from '../Store';

export const AppSpinner = () => {
  const [spinner, setSpinner] = React.useState(false);

  console.log('store status-----', Store.getState().SpinnerReducer.loader);
  Store.subscribe(() => {
    setSpinner(Store.getState().SpinnerReducer.loader);
  });

  useEffect(() => {}, [spinner]);
  console.log('spinnner action status=>', spinner);

  if (!spinner) {
    return null;
  }
  return (
    <Modal transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={'red'}/>
      </View>
    </Modal>
  );
};
