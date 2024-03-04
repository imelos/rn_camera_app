import {PropsWithChildren} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {COLORS} from '@src/colors';

export type CircleBtnProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
};

const CircleBtn: React.FC<PropsWithChildren<CircleBtnProps>> = ({
  children,
  style,
  btnStyle,
  onPress,
}) => {
  return (
    <TouchableHighlight style={style} onPress={onPress}>
      <View style={[styles.btn, btnStyle]}>{children}</View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.defaultBtn,
    borderRadius: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleBtn;
