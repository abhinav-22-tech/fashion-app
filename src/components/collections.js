import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {
  useSharedValue,
  withSpring,
  FadeInDown,
} from 'react-native-reanimated';
import MasonryList from '@react-native-seoul/masonry-list';
import {TagIcon, HeartIcon} from 'react-native-heroicons/outline';
// import {HeartIcon} from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

import Loading from './loading';

// import {collectionData} from '../constants';

function Collections() {
  const [collectionData, setCollectionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        // 'http://192.168.0.107:3000/api/products',
        // 'https://raw.githubusercontent.com/abhinav-22-tech/fashion-json-data/main/index.json',
        'https://gist.githubusercontent.com/abhinav-22-tech/2d6e550487098686757027ea6bf8d89c/raw/920f510898158d108539e50e7083184bbd5ab245/gistfile1.json',
      );
      // console.log('API data: ' + response.data);
      if (response && response.data) {
        setCollectionData(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  return (
    <View className="">
      {/* Collections */}
      <Text
        style={{fontSize: hp(3), padding: hp(1)}}
        className="text-neutral-700 font-semibold tracking-wider">
        New Collections
      </Text>
      <View className="flex">
        {loading ? (
          <Loading size="large" className="mt-24" color="#fb923c" />
        ) : (
          <MasonryList
            data={collectionData}
            renderItem={({item, i}) => <CollectionCard item={item} index={i} />}
            keyExtractor={item => item._id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            contentContainerStyle={{paddingBottom: hp(1.5)}}
          />
        )}
      </View>
    </View>
  );
}

const CollectionCard = ({item, index}) => {
  const [heartIconColorState, setHeartIconColorState] = useState('white');
  const [discount, setDiscount] = useState(0);

  const navigation = useNavigation();

  const handleNavigationToCollection = () => {
    navigation.navigate('Collection');
  };

  const handleHeartIconState = () => {
    setHeartIconColorState(prevColor =>
      prevColor === 'white' ? 'red' : 'white',
    );
  };

  const findDiscountOff = () => {
    const previousPrice = item.previousPrice;
    const price = item.price;

    let result = ((previousPrice - price) * 100) / previousPrice;
    result = parseInt(result);
    setDiscount(result);
  };

  useEffect(() => {
    findDiscountOff();
  }, []);

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(400)
        .springify()
        .damping(12)}>
      <Pressable
        className="flex flex-1 justify-center"
        style={{
          width: '100%',
          paddingLeft: hp(0.5),
          paddingRight: hp(0.5),
          marginBottom: hp(1.5),
        }}
        onPress={handleNavigationToCollection}>
        {/* Image of Product */}
        <View className="relative flex-1">
          <Image
            style={{width: '100%', height: hp(28), borderRadius: 10}}
            className="bg-black/5"
            source={{uri: item.imageUrl[0]}}
          />
          <TouchableOpacity
            className="absolute"
            style={{top: hp(0.8), right: hp(1)}}
            onPress={handleHeartIconState}>
            <HeartIcon
              color={
                heartIconColorState !== 'white' ? heartIconColorState : 'black'
              }
              size={hp(3)}
              strokeWidth={0.2}
              fill={heartIconColorState}
            />
          </TouchableOpacity>
        </View>
        {/* Label Section  */}
        <View className="flex">
          <Text
            style={{fontSize: hp(1.9)}}
            className="font-bold text-neutral-950 tracking-wide">
            {item.name}
          </Text>

          <Text
            style={{fontSize: hp(1.6)}}
            className="text-neutral-600 font-semibold tracking-wide">
            {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
          </Text>
          <View className="flex flex-row">
            {item.previousPrice && (
              <Text
                style={{fontSize: hp(1.8), paddingTop: hp(0.1)}}
                className="text-neutral-500 font-light line-through">
                ₹{item.previousPrice}
              </Text>
            )}
            <Text
              style={{fontSize: hp(1.9), paddingTop: hp(0.1)}}
              className="text-neutral-800 font-semibold tracking-wide ml-1">
              ₹{item.price}
            </Text>
            {item.previousPrice && (
              <LinearGradient
                className="flex flex-1 flex-row ml-1 justify-center items-center rounded-lg"
                colors={['#fb923c', '#fb7185']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <TagIcon color="white" size={hp(2)} strokeWidth={2.5} />
                <Text
                  style={{fontSize: hp(1.3), paddingTop: hp(0.1)}}
                  className="font-bold tracking-wide ml-1 text-white">
                  {discount}% OFF!
                </Text>
              </LinearGradient>
            )}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Collections;
