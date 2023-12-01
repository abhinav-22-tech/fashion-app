import React, { useEffect } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  // Use Nagivation to go home screen 
  const navigation = useNavigation();

  useEffect(() => {
    // Animation for logo rings 
    ring1Padding.value = 0; // First ring
    ring2Padding.value = 0; // Second ring
    setTimeout(() => ring1Padding.value = withSpring(ring1Padding.value + hp(2)), 100); // settime 1ms 
    setTimeout(() => ring2Padding.value = withSpring(ring2Padding.value + hp(5)), 300); // settime 3ms

    // Use Nagivation to navigate to home screen after 2 second
    setTimeout(() => navigation.navigate('Home'), 400)
  }, [])


  return (
    <View className="flex flex-1 justify-center items-center space-y-5 bg-orange-500" >
      <StatusBar animated={true} backgroundColor="#f97316" barStyle="light-content" />
      {/* Logo Image */}
      <Animated.View className="bg-white/60 rounded-full" style={{ padding: ring2Padding }}>
        <Animated.View className="bg-white rounded-full" style={{ padding: ring1Padding }}>
          <Image source={require("../assets/Fashy-removebg-preview.png")} style={{ width: hp(30), height: hp(30) }} />
        </Animated.View>
      </Animated.View>

      {/*Title and Punchline */}
      <View className="flex space-y-2 items-center" >
        <Text style={{ fontSize: hp(2.2) }} className="text-white font-bold tracking-wider">
          Elevate Every Look, Fashy Hook
        </Text>
      </View>
    </View>
  );
}
export default WelcomeScreen;
