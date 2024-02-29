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

const SliderScreen: React.FC<Props<'slider'>> = ({route, navigation}) => {
  const {photos} = route.params;
  //   const [beforeImage, setBefore] = useState<null | Image>(null);
  //   const [afterImage, setAfter] = useState<null | Image>(null);

  //   const displaySliderBtn = beforeImage && afterImage;
  return (
    <View style={styles.container}>
      <Text>dfd</Text>
      <Text>{photos.before.modificationDate}</Text>
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
