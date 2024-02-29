import {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

import {Image} from 'react-native-image-crop-picker';

import PhotosPicker from '@src/screens/PhotosPicker';
import Slider from '@src/screens/Slider';

export type RootStackParamList = {
  photosPicker: undefined;
  slider: {
    photos: {
      before: Image;
      after: Image;
    };
  };
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
          headerStyle: {
            backgroundColor: '#797979',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <RootStack.Screen
          name="photosPicker"
          component={PhotosPicker}
          options={{title: 'PhotosPicker'}}
        />
        <RootStack.Screen
          name="slider"
          component={Slider}
          options={{title: 'Slider'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
