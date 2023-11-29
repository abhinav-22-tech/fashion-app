import React, { useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { BellIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { collectionData } from '../constants';

function SearchBar() {
  return (
    <View style={{ paddingTop: hp(0.8) }}>
      <View className="flex-row items-center rounded-full bg-black/5" style={{ padding: hp(0.7) }}>
        <TextInput
          placeholder='Search for brands and product'
          placeholderTextColor={'gray'}
          style={{ fontSize: hp(1.8), marginBottom: hp(0.1), paddingLeft: hp(1.5) }}
          className="flex-1 text-base tracking-wider text-black"
        />
        <View className="rounded-full bg-white p-3">
          <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
        </View>
      </View>
    </View>
  );
}

export default SearchBar;