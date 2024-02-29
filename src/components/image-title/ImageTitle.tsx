import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '@src/colors';

type ImageTitleProps = {
  title: string;
  subTitle: string;
  style?: StyleProp<ViewStyle>;
};

const ImageTitle: React.FC<ImageTitleProps> = ({title, subTitle, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.defaultText,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.defaultBtn,
  },
});

export default ImageTitle;
