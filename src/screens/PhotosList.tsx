import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// import {
//   Camera,
//   useCameraPermission,
//   useCameraDevice,
// } from 'react-native-vision-camera';

const Login: React.FC = () => {
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback(() => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="open camers"
        onPress={() => {
          onButtonPress();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
