import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicscreen from "./screens/IssLocation";
import SpaceCraftscreen from "./screens/Meteors";
import StarmapScreen from "./screens/Updates";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.NavigationContainer
      initialRouteName="Home" screenOptions={{ headersShown:false }}>
          <Stack.Screen name="Home" components= {HomeScreen}/>
          <StackScreen name="DailyPic" components={DailyPicscreen}/>
          <Stack.Screen name="SpaceCraft" components={SpaceCraftscreen}/>
          <Stack.Screen name="Starmap" components={StarmapScreen} />
        </Stack.NavigationContainer>
    </NavigationContainer>
  );
}

