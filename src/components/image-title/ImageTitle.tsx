import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ImageTitleProps = {
  title: string;
  subTitle: string;
};

const PhotoPicker: React.FC<ImageTitleProps> = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
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
