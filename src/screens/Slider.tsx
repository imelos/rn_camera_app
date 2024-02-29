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
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {Props} from '@src/navigation/Navigation';

import PhotoPicker from '@src/features/photo-picker/PhotoPicker';

const Slider: React.FC<Props<'slider'>> = ({navigation}) => {
  //   const [beforeImage, setBefore] = useState<null | Image>(null);
  //   const [afterImage, setAfter] = useState<null | Image>(null);

  //   const displaySliderBtn = beforeImage && afterImage;
  return (
    <View style={styles.container}>
      <Text>dfd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default Slider;
