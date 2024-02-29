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

const PhotosPicker: React.FC<Props<'photosPicker'>> = ({navigation}) => {
  const [beforeImage, setBefore] = useState<null | Image>(null);
  const [afterImage, setAfter] = useState<null | Image>(null);

  const displaySliderBtn = beforeImage && afterImage;
  return (
    <View style={styles.container}>
      <PhotoPicker onChange={setBefore} tag={'Before'} />
      <PhotoPicker onChange={setAfter} tag={'After'} />
      {displaySliderBtn && (
        <Pressable style={{position: 'absolute', right: 70, bottom: 70}}>
          <View
            style={{
              width: 60,
              height: 60,
              position: 'absolute',
              backgroundColor: 'green',
              borderRadius: 50,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              // bottom: 10,
              // right: 20
            }}>
            <Text style={{fontSize: 25, color: '#fff'}}>{'>'}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default PhotosPicker;
