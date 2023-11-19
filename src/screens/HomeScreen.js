import React from 'react';
import { Text, View, Button } from 'react-native';

import { BellIcon, HeartIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'


function HomeScreen({ navigation }) {
  return (
    <View className="flex flex-1 bg-white p-5" >
      <View className="flex-1 flex-row">
        <Text className="text-xl font-bold text-black">Shop</Text>
        <BellIcon color={'black'} />
        <HeartIcon color={'black'} />
        <ShoppingCartIcon color={'black'} />
      </View>
      <Button
        title="Go to Start"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
}
export default HomeScreen;
