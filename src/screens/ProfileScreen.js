import React, {useEffect} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

function WishlistScreen() {
  return (
    <View className="flex flex-1 justify-center items-center space-y-5 bg-black">
      <StatusBar animated={true} barStyle="dark-content" />
      <Text className="text-white font-semibold tracking-wider text-lg">
        Profile Coming Soon!
      </Text>
    </View>
  );
}
export default WishlistScreen;
