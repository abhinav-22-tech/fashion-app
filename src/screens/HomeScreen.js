import React, {useEffect, useState, useCallback} from 'react';
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
  BackHandler,
  Alert,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

import {
  BellIcon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

import {collectionData} from '../constants';
import Collections from '../components/collections';
import Header from '../components/header';
import SearchBar from '../components/searchbar';
import Category from '../components/category';
import Tabbar from '../components/tabbar';

function HomeScreen() {
  // let isActive = false;
  // let activeButtonClass = isActive ? ' bg-amber-400' : ' bg-black/10';

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
    // withSpring(activePadding.value + hp(2))
  };

  // Back button disable in HomeScreen
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <View
      className="flex flex-1 bg-white"
      style={{padding: hp(1.1), paddingBottom: hp(0)}}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      {/* Header Bar */}
      <Header />

      {/* Middle Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6">
        {/* Search Bar */}
        <SearchBar />
        {/* Category */}
        <Category />
        {/* Collections */}
        <Collections />
      </ScrollView>

      {/* Footer */}

      <Tabbar />

      {/* Home Icon*/}
      {/* Brands */}
      {/* WishList */}
      {/* Profile */}
    </View>
  );
}

export default HomeScreen;

{
  /* <Button
          title="Go to Start"
          onPress={() => navigation.navigate('Start')}
        /> */
}
