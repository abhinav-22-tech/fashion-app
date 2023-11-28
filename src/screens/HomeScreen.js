import React, { useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { BellIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { collectionData } from '../constants';

function HomeScreen() {
  // let isActive = false;
  // let activeButtonClass = isActive ? ' bg-amber-400' : ' bg-black/10';

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
    // withSpring(activePadding.value + hp(2))
  }

  return (
    <View className="flex flex-1 bg-white" style={{ padding: hp(1.7) }}>
      <StatusBar animated={true} backgroundColor="white" barStyle="dark-content" />

      {/* Header Bar */}
      <View className="flex-row justify-between items-center" style={{ marginBottom: hp(1.3) }}>
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

        {/* Horizontal Category View - Womens, Mens, Kids */}
      </View>

      {/* Middle Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6"
      >
        {/* Search Bar */}
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

        {/* Category */}
        <ScrollView
          horizontal
          className="space-x-7"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <TouchableOpacity className="flex items-center space-y-1">
            <View className={"rounded-lg items-center"}>
              <Image source={require('../assets/images/model-men.png')} style={{ width: hp(8), height: hp(7.1) }} />
              <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Men</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex items-center space-y-1">
            <View className={"rounded-lg items-center"}>
              <Image source={require('../assets/images/model-women.png')} style={{ width: hp(8), height: hp(7.1) }} />
              <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Women</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex items-center space-y-1">
            <View className={"rounded-lg items-center"}>
              <Image source={require('../assets/images/model-kids.png')} style={{ width: hp(8), height: hp(7.1) }} />
              <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Kids</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex items-center space-y-1">
            <View className={"rounded-lg items-center"}>
              <Image source={require('../assets/images/winter-wear.png')} style={{ width: hp(8), height: hp(7.1) }} />
              <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Winter Wear</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex items-center space-y-1">
            <View className={"rounded-lg items-center"}>
              <Image source={require('../assets/images/footwear.png')} style={{ width: hp(8), height: hp(7.1) }} />
              <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Footwear</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>

        {/* Collections */}
        <View className="">
          <Text style={{ fontSize: hp(3) }} className="text-neutral-700 font-semibold">New Collections</Text>
          <View className="flex">
            <FlatList
              data={collectionData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </View>
        </View>

      </ScrollView>

      {/* Footer */}
      {/* Home Icon*/}
      {/* Brands */}
      {/* WishList */}
      {/* Profile */}
    </View >
  );
}

const renderItem = ({ item }) => (
  <View className="flex flex-1 justify-around" style={{ width: '100%', paddingLeft: 5, paddingRight: 5 }}>
    <Image style={{ width: '100%', height: hp(35), borderRadius: 10 }}
      className="bg-black/5" source={require('../assets/images/Dummy-women.png')} />
    <Text>{item.name}</Text>
  </View>
);

export default HomeScreen;

{/* <Button
          title="Go to Start"
          onPress={() => navigation.navigate('Start')}
        /> */}