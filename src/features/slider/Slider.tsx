import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SliderParams} from '@src/navigation/Navigation';
import Slider from '@react-native-community/slider';

const SliderComponent: React.FC<SliderParams> = ({photos}) => {
  const [width, setWidth] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{photos.after.modificationDate}</Text>
      <View style={{position: 'relative'}}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{uri: photos.before.path}}
        />
        <View
          style={{
            width: width,
            height: 200,
            overflow: 'hidden',
            position: 'absolute',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
            }}
            source={{uri: photos.after.path}}
          />
        </View>
      </View>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={200}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => {
          console.log('val change');
          console.log(value);
          setWidth(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default SliderComponent;
