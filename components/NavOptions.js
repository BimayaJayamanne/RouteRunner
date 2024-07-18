import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: require('../assets/driver.png'),
    screen: "MapScreen",
  },
  {
    id: "234",
    title: "Get a car",
    image: require('../assets/car.png'),
    screen: "CarScreen",
  }
];

const NavOptions = () => {
  const navigation=useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
