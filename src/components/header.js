import React, { useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { BellIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { collectionData } from '../constants';

function Header() {
  return (
    <View className="flex-row justify-between items-center"
      style={{ marginBottom: hp(1.3), paddingLeft: hp(0.8), paddingRight: hp(0.8) }}>
      {/* Brand Logo */}
      <Image source={require("../assets/images/Fashy.png")} style={{ height: hp(5), width: hp(13) }} />
      <View className="flex-row items-center space-x-3">
        {/* Cart Icon */}
        <ShoppingCartIcon color="gray" size={hp(4)} />
        {/* Wishlist */}
        <HeartIcon color="gray" size={hp(4)} />
        {/* Notification */}
        <View className="flex bg-orange-300 rounded-full items-center" style={{ padding: hp(0.7) }}>
          <BellIcon color="black" size={hp(3.5)} />
        </View>
      </View>
    </View>
  );
}

export default Header;