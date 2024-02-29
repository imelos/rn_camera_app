import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { ICO_CAMERA, ICO_GALLERY } from '@src/images';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export const ImageIcon = () => {
  return <Image style={styles.icon} source={ICO_GALLERY} />;
};

export const CameraIcon = () => {
  return <Image style={styles.icon} source={ICO_CAMERA} />;
};