import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/AuthScreen/Login';
import {Register} from '../screens/AuthScreen/Register';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
