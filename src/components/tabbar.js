import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

import {
  HeartIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

function Tabbar() {

  return (
    <View
      className="flex flex-1 absolute z-10 overflow-hidden border border-gray-300 rounded-full"
      style={{
        bottom: hp(1),
        left: hp(2),
        right: hp(2),
      }}>
      <View
        className="flex-row justify-between items-center bg-white"
        style={{
          paddingTop: hp(1.5),
          paddingBottom: hp(1.5),
          paddingRight: hp(2),
          paddingLeft: hp(2),
        }}>
        <HomeIcon color="black" size={hp(4)} />
        <ShoppingCartIcon color="gray" size={hp(4)} />
        <HeartIcon color="gray" size={hp(4)} />
        <UserCircleIcon color="gray" size={hp(4)} />
      </View>
    </View>
  );
}

export default Tabbar;
