import React, { useEffect } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { BellIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

function HomeScreen({ navigation }) {
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
          className="space-x-4 bg-red-700"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <TouchableOpacity className="flex items-center space-y-1">
            <View style={{ padding: hp(0.7) }}>
              <Image source={require('../assets/images/model-men.png')} style={{ width: hp(20), height: (hp(20)) }} />
            </View>
          </TouchableOpacity>
        </ScrollView>


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