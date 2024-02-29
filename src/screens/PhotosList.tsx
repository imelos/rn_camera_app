import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';

const Login: React.FC = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [showCamera, setShowCamera] = useState(true);
  const camera = useRef<Camera>(null);

  const device = useCameraDevice('back');

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      console.log(photo);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  if (device == null)
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>no camera</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={showCamera}
        ref={camera}
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
