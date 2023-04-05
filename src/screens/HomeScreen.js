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
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <Text>Hello I am ThanhNT 🎉</Text>
    //   <TextInput
    //     style={{height: 40}}
    //     placeholder="Type here to translate!"
    //     onChangeText={newText => setText(newText)}
    //     defaultValue={text}
    //   />
    //   <Text style={{padding: 10, fontSize: 42}}>
    //     {text
    //       .split(' ')
    //       .map(word => word && '🍕')
    //       .join(' ')}
    //   </Text>
    // </View>
  );
};

export default HomeScreen;