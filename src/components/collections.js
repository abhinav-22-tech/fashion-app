import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring, FadeInDown } from 'react-native-reanimated';
import MasonryList from '@react-native-seoul/masonry-list';
import { TagIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';

import { collectionData } from '../constants';


function Collections() {
  return (
    <View>
      {/* Collections */}
      <Text style={{ fontSize: hp(3), padding: hp(1) }}
        className="text-neutral-700 font-semibold tracking-wider">New Collections</Text>
      <View className="flex">
        <MasonryList
          data={collectionData}
          renderItem={({ item, i }) => <CollectionCard item={item} index={i} />}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}

const CollectionCard = ({ item, index }) => {
  const [heartIconColorState, setHeartIconColorState] = useState("white");

  const handleHeartIconState = () => {
    setHeartIconColorState((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
  }

  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(400).springify().damping(12)}>
      <Pressable
        className="flex flex-1 justify-center"
        style={{ width: '100%', paddingLeft: hp(0.5), paddingRight: hp(0.5), marginBottom: hp(1.5) }}
        onPress={() => console.log('Collection Pressed')}>
        {/* Image of Product */}
        <View className="relative flex-1">
          <Image style={{ width: '100%', height: hp(28), borderRadius: 10 }}
            className="bg-black/5" source={require('../assets/images/Dummy-women.png')} />
          <TouchableOpacity className='absolute'
            style={{ top: hp(0.8), right: hp(1) }}
            onPress={handleHeartIconState}>
            <HeartIcon color={heartIconColorState} size={hp(3)} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
        {/* Label Section  */}
        <View className="flex">
          <Text style={{ fontSize: hp(1.9) }}
            className="font-bold text-neutral-950 tracking-wide">
            Company name
          </Text>
          <Text style={{ fontSize: hp(1.6) }}
            className="text-neutral-600 font-semibold tracking-wide">
            {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
          </Text>
          <View className="flex flex-row">
            <Text style={{ fontSize: hp(1.8), paddingTop: hp(0.1) }}
              className="text-neutral-500 font-light line-through">₹1,999
            </Text >
            <Text style={{ fontSize: hp(1.9), paddingTop: hp(0.1) }}
              className="text-neutral-800 font-semibold tracking-wide ml-1">₹576
            </Text>
            <LinearGradient className="flex flex-1 flex-row ml-1 justify-center items-center rounded-lg"
              colors={['#fb923c', '#fb7185']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <TagIcon color="white" size={hp(2)} strokeWidth={2.5} />
              <Text style={{ fontSize: hp(1.3), paddingTop: hp(0.1) }}
                className="font-bold tracking-wide ml-1 text-white">67% OFF!
              </Text>
            </LinearGradient>
          </View>

        </View>
      </Pressable>
    </Animated.View>
  )
}

export default Collections;
