import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraScreen from 'containers/Camera';
import HomeScreen from './HomeScreen';

const MainStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="CameraScreen" component={CameraScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
