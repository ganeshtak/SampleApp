import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeIcon, } from './Icons';
import { HomeScreenFirst } from '../screens/DashBoard/HomeScreenFirst';
import { HomeScreenSecond } from '../screens/DashBoard/HomeScreenSecond';
import { HomeScreenThird } from '../screens/DashBoard/HomeScreenThird';
import { HomeScreenFourth } from '../screens/DashBoard/HomeScreenFourth';
import { totalSize, w } from '../Style.js/styles';

const Tab = createBottomTabNavigator();
const iconSize = totalSize(3.9);
const activeColor = "blue";
const inActiveColor = "gray";
const tabHeight = totalSize(6.5);
const tabWidth = w(95);
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#fff',
      }}
      initialRouteName="DashBoard"
      screenOptions={{tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name="Home"
        component={HomeScreenFirst}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color = colors.primary, size}) => (
            <HomeIcon
              color={focused ? activeColor : inActiveColor}
              size={iconSize}
              isActive={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreenSecond}
        options={{
          tabBarIcon: ({focused, color = colors.primary, size}) => (
            <HomeIcon
              color={focused ? activeColor : inActiveColor}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreenThird}
        options={{
          headerShown: false,

          tabBarIcon: ({focused, color = colors.primary, size}) => (
            <HomeIcon
              color={focused ? activeColor : inActiveColor}
              size={iconSize}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={HomeScreenFourth}
        options={{
          headerShown: false,

          tabBarIcon: ({focused, color = colors.primary, size}) => (
            <HomeIcon
              color={focused ? activeColor : inActiveColor}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
