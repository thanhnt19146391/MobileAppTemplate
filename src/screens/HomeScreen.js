import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BoyScreen from './BoyScreen';
import GirlScreen from './GirlScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Ape"
      options = {{ tabBarIcon: () => <Text>🐶</Text>}}
      component={BoyScreen} 
      />
      <Tab.Screen 
      name="Epe" 
      options = {{ tabBarIcon: () => <Text>🐰</Text>}}
      component={GirlScreen} 
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;