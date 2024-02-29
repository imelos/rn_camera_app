import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Props} from '@src/navigation/Navigation';

import Slider from '@src/features/slider/Slider';
import BackBtn from '@src/components/buttons/BackBtn';

const SliderScreen: React.FC<Props<'slider'>> = ({route, navigation}) => {
  const {photos} = route.params;
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BackBtn onPress={goBack} style={styles.btn} />
      <Slider photos={photos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    left: 20,
    top: 5,
  },
});

export default SliderScreen;
