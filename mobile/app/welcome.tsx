// app/welcome.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ImageBackground,
  Text,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    const isAuth = false; // Replace with actual auth check (e.g. from context or storage)

    if (isAuth) {
      router.replace('/(tabs)');
    } else {
      router.replace('/auth');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/Welcom-bmw.jpg')}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Dark overlay */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Button */}
        <Pressable
          onPress={handleGetStarted}
          style={({ pressed }) => ({
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 10,
            transform: [{ scale: pressed ? 0.98 : 1 }],
            borderRadius: 10,
            overflow: 'hidden',
          })}
        >
          <ImageBackground
            source={require('../assets/images/speed.jpeg')}
            resizeMode="cover"
            style={{
              paddingVertical: 14,
              paddingHorizontal: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{ borderRadius: 10 }}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Get Started
            </Text>
          </ImageBackground>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
