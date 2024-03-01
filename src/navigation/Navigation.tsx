import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

import {Image} from 'react-native-image-crop-picker';

import PhotosPickerScreen from '@src/screens/PhotosPickerScreen';
import SliderScreen from '@src/screens/SliderScreen';

export type SliderParams = {
  photos: {
    before: Image;
    after: Image;
  };
};

export type RootStackParamList = {
  photosPicker: undefined;
  slider: SliderParams;
};

const RootStack = createStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="photosPicker" component={PhotosPickerScreen} />
        <RootStack.Screen name="slider" component={SliderScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
