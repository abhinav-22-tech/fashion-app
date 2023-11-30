import React, { useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring, FadeInDown } from 'react-native-reanimated';

import { collectionData } from '../constants';

function Category() {
  return (
    <View
      style={{ paddingTop: hp(1.5), paddingBottom: hp(0.5) }}>
      <ScrollView
        horizontal
        className="space-x-7"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {/* <CategoryCard sourceImage={require('../assets/images/model-men.png')} title='Men' index={1} />
        <CategoryCard sourceImage={require('../assets/images/model-women.png')} title='Women' index={1} />
        <CategoryCard sourceImage={require('../assets/images/model-kids.png')} title='Kids' index={1} />
        <CategoryCard sourceImage={require('../assets/images/winter-wear.png')} title='Winter Wear' index={1} />
        <CategoryCard sourceImage={require('../assets/images/footwear.png')} title='Footwear' index={1} /> */}

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
    </View>
  );
}

// const CategoryCard = ({ sourceImage, title, index }) => {
//   return (
//     <TouchableOpacity className="flex items-center" style={{ marginLeft: hp(1), marginRight: hp(1) }}>
//       <View className={"rounded-lg items-center"}>
//         <Image source={require('../assets/images/model-men.png')} style={{ width: hp(8), height: hp(7.1) }} />
//         <Text className="text-base tracking-wider text-black" style={{ fontSize: hp(1.8) }}>Men</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

export default Category;