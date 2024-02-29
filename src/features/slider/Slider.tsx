import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {SliderParams} from '@src/navigation/Navigation';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth * 0.8;

const SliderComponent: React.FC<SliderParams> = ({photos}) => {
  const [width, setWidth] = useState<number>(0);

  const displayMessage = (value: number) => {
    if (value === 0) {
      console.log('after');
    }
    if (value >= imageWidth) {
      console.log('before');
    }
  };

  return (
    <View style={styles.container}>
      <Text>{photos.after.modificationDate}</Text>
      <View style={{position: 'relative'}}>
        <Image
          style={{
            width: imageWidth,
            aspectRatio: '0.75',
          }}
          source={{uri: photos.before.path}}
        />
        <View
          style={{
            width: width,
            overflow: 'hidden',
            position: 'absolute',
          }}>
          <Image
            style={{
              width: imageWidth,
              aspectRatio: '0.75',
            }}
            source={{uri: photos.after.path}}
          />
        </View>
      </View>
      <Slider
        style={{width: '87%', height: 40}}
        minimumValue={0}
        maximumValue={imageWidth}
        minimumTrackTintColor="purple"
        maximumTrackTintColor="#000000"
        onValueChange={setWidth}
        onSlidingComplete={displayMessage}
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
});

export default SliderComponent;
