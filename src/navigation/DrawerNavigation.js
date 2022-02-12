import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HomeScreenFirst } from '../screens/DashBoard/HomeScreenFirst';
import { HomeScreenSecond } from '../screens/DashBoard/HomeScreenSecond';
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreenFirst} />
      <Drawer.Screen name="Notifications" component={HomeScreenSecond} />
    </Drawer.Navigator>
  );
};
