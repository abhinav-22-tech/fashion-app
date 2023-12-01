import React, { useEffect } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function CollectionScreen() {
  return (
    <View className="flex flex-1 justify-center items-center space-y-5 bg-white">
      <StatusBar animated={true} barStyle="dark-content" />
      <Text>Hello</Text>
      
    </View>
  );
}
export default CollectionScreen;
