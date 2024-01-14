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
  const [tabbarSelective, setTabbarSelective] = useState(0);

  const navigation = useNavigation();

  const handleSelect = index => {
    setTabbarSelective(index);
    if (index === 0) navigation.navigate('Home');
    else if (index === 1) navigation.navigate('Cart');
    else if (index === 2) navigation.navigate('Wishlist');
    else if (index === 3) navigation.navigate('Profile');
  };

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
        <TouchableOpacity onPress={() => handleSelect(0)}>
          <HomeIcon
            color={tabbarSelective === 0 ? 'orange' : 'gray'}
            size={hp(4)}
            strokeWidth={tabbarSelective === 0 ? hp(0.3) : hp(0.2)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelect(1)}>
          <ShoppingCartIcon
            color={tabbarSelective === 1 ? 'orange' : 'gray'}
            size={hp(4)}
            strokeWidth={tabbarSelective === 1 ? hp(0.3) : hp(0.2)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelect(2)}>
          <HeartIcon
            color={tabbarSelective === 2 ? 'orange' : 'gray'}
            size={hp(4)}
            strokeWidth={tabbarSelective === 2 ? hp(0.3) : hp(0.2)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelect(3)}>
          <UserCircleIcon
            color={tabbarSelective === 3 ? 'orange' : 'gray'}
            size={hp(4)}
            strokeWidth={tabbarSelective === 3 ? hp(0.3) : hp(0.2)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Tabbar;
