import React, { useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { BellIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { collectionData } from '../constants';
import Collections from '../components/collections';
import Header from '../components/header';
import SearchBar from '../components/searchbar';
import Category from '../components/category';

function HomeScreen() {
  // let isActive = false;
  // let activeButtonClass = isActive ? ' bg-amber-400' : ' bg-black/10';

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
    // withSpring(activePadding.value + hp(2))
  }

  return (
    <View className="flex flex-1 bg-white" style={{ padding: hp(1.1) }}>
      <StatusBar animated={true} backgroundColor="white" barStyle="dark-content" />
      {/* Header Bar */}
      <Header />

      {/* Middle Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6">
        {/* Search Bar */}
        <SearchBar />
        {/* Category */}
        <Category />
        {/* Collections */}
        <Collections />
      </ScrollView>

      {/* Footer */}
      {/* Home Icon*/}
      {/* Brands */}
      {/* WishList */}
      {/* Profile */}
    </View >
  );
}


export default HomeScreen;

{/* <Button
          title="Go to Start"
          onPress={() => navigation.navigate('Start')}
        /> */}