import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
});

export default ImageTitle;
