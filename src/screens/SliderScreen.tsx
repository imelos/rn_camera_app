import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Props} from '@src/navigation/Navigation';

import Slider from '@src/features/slider/Slider';

const SliderScreen: React.FC<Props<'slider'>> = ({route, navigation}) => {
  const {photos} = route.params;
  return (
    <View style={styles.container}>
      <Slider photos={photos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default SliderScreen;
