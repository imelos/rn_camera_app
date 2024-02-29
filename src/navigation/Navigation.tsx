import {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

import PhotosList from '@src/screens/PhotosList';



export type RootStackParamList = {
  photosList: undefined;
  slider: undefined;
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
          name="photosList"
          component={PhotosList}
          options={{title: 'Login'}}
        />
        <RootStack.Screen
          name="slider"
          component={PhotosList}
          options={{title: 'User Info'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
