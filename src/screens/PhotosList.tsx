import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';

import PhotoPicker from '@src/features/photo-picker/PhotoPicker';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <PhotoPicker tag={'before'} />
      <PhotoPicker tag={'after'} />
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
