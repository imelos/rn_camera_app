import React, {useState, useCallback} from 'react';
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

  const setBeforeImage = useCallback((val: ImageState) => {
    setBefore(val);
  }, []);

  const setAfterImage = useCallback((val: ImageState) => {
    setAfter(val);
  }, []);

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
      <PhotoPicker onChange={setBeforeImage} tag={'Before'} />
      <PhotoPicker onChange={setAfterImage} tag={'After'} />
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
    right: 20,
    bottom: 20,
  },
  btnTextStyle: {
    fontSize: 25,
    color: '#fff',
  },
});

export default PhotosPickerScreen;
