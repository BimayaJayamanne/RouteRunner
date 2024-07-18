import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import routeRunnerImage from '../assets/Route Runner.png'; // Relative path to the image
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={routeRunnerImage} // Using the imported image directly
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Your custom styles
});

export default HomeScreen;
