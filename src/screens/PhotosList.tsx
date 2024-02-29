import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';

import PhotoPicker from '@src/features/photo-picker/PhotoPicker';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <PhotoPicker tag={'Before'} />
      <PhotoPicker tag={'After'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
