import React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export type BackBtnProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const BackBtn: React.FC<BackBtnProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{'<'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#F7A6D8',
  },
});

export default BackBtn;
