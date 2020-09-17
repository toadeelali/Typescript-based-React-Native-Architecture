import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import CameraScreen from 'containers/Camera';
import HomeScreen from './HomeScreen';
import ChartScreen from 'containers/Chart';

const MainStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="ChartScreen" component={ChartScreen} />
        {/* <MainStack.Screen name="CameraScreen" component={CameraScreen} /> */}
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
