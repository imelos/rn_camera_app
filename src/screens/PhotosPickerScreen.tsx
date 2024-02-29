import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-image-crop-picker';

import {Props} from '@src/navigation/Navigation';
import PhotoPicker from '@src/features/photo-picker/PhotoPicker';
import CircleBtn from '@src/components/buttons/CircleBtn';

export type ImageState = null | Image;

const PhotosPickerScreen: React.FC<Props<'photosPicker'>> = ({navigation}) => {
  const [before, setBefore] = useState<ImageState>(null);
  const [after, setAfter] = useState<ImageState>(null);

  const displaySliderBtn = before && after;

  const navigateToSlider = () => {
    if (displaySliderBtn) {
      navigation.navigate('slider', {
        photos: {
          before,
          after,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <PhotoPicker onChange={setBefore} tag={'Before'} />
      <PhotoPicker onChange={setAfter} tag={'After'} />
      {displaySliderBtn && (
        <CircleBtn style={styles.btnStyle} onPress={navigateToSlider}>
          <Text style={styles.btnTextStyle}>{'>'}</Text>
        </CircleBtn>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  btnStyle: {
    position: 'absolute',
    right: 70,
    bottom: 70,
  },
  btnTextStyle: {
    fontSize: 25,
    color: '#fff',
  },
});

export default PhotosPickerScreen;
