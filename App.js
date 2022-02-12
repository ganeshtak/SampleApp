import React, {useEffect} from 'react';
import {View} from 'react-native';
import { RootNavigation } from './src/navigation';
import { AppSpinner } from './src/Utility/AppSpiner';

export default App = () => {
  return (
    <>
      <RootNavigation />
      <AppSpinner />
    </>
  );
};
