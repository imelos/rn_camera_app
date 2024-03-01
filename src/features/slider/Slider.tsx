import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {SliderParams} from '@src/navigation/Navigation';
import Slider from '@react-native-community/slider';

import ImageTitle from '@src/components/image-title/ImageTitle';

import {formatDate} from '@src/utils/format-date';

import {COLORS} from '@src/colors';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth * 0.8;

const SliderComponent: React.FC<SliderParams> = ({photos}) => {
  const [width, setWidth] = useState<number>(0);

  const [{title, subTitle}, setTitle] = useState<{
    title: string;
    subTitle: string;
  }>({
    title: 'After',
    subTitle: formatDate(Number(photos.after.modificationDate || 0)),
  });

  const displayTitle = (value: number) => {
    if (value === 0) {
      setTitle({
        title: 'After',
        subTitle: formatDate(Number(photos.after.modificationDate || 0)),
      });
    }
    if (value >= imageWidth) {
      setTitle({
        title: 'Before',
        subTitle: formatDate(Number(photos.after.modificationDate || 0)),
      });
    }
  };

  const hideTitle = () => {
    setTitle({
      title: '',
      subTitle: '',
    });
  };

  return (
    <View style={styles.container}>
      <ImageTitle title={title} subTitle={subTitle} />
      <View style={{position: 'relative'}}>
        <Image style={styles.image} source={{uri: photos.before.path}} />
        <View
          style={{
            width: width,
            overflow: 'hidden',
            position: 'absolute',
          }}>
          <Image style={styles.image} source={{uri: photos.after.path}} />
        </View>
      </View>
      <Slider
        style={{width: '87%', height: 40}}
        minimumValue={0}
        maximumValue={imageWidth}
        minimumTrackTintColor={COLORS.defaultBtn}
        maximumTrackTintColor="#000000"
        thumbTintColor={COLORS.defaultBtn}
        onValueChange={setWidth}
        onSlidingStart={hideTitle}
        onSlidingComplete={displayTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    aspectRatio: '0.75',
  },
});

export default SliderComponent;
