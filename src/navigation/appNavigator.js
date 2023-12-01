import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigator Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'; // Home Screen(Main Screen)
import WelcomeScreen from '../screens/WelcomeScreen';
import CollectionScreen from '../screens/CollectionScreen';

// Create a stack using Stack Navigator
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Collection" component={CollectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
