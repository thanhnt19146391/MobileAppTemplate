import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import { Header } from '@rneui/themed';

const BoyScreen = () => {
  const [text, setText] = useState('');
  return (
    <Header
      centerComponent={{
        text : 'For Ape 🐶',
        style: {color: '#fff'}
      }}
    />
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <Text>Boy Screen 🎉</Text>
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

export default BoyScreen;