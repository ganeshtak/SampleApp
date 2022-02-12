import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {Store} from '../Store';
import {
  AuthNavigation,
  SplashNavigator,
  OnSliderScreen,
} from './StackNavigation';
import {AppRouteNavigator} from './AppRouteNavigator';

export const RootNavigation = () => {
  const renderApp = () => {

      return <AuthNavigation />
    }

  return (
  <NavigationContainer>
  {renderApp()}
  </NavigationContainer>
  )
};
