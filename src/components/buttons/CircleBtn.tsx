import {PropsWithChildren} from 'react';
import {Pressable, View, StyleProp, ViewStyle, StyleSheet} from 'react-native';

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
    <Pressable style={style} onPress={onPress}>
      <View style={[styles.btn, btnStyle]}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    position: 'absolute',
    backgroundColor: 'green',
    borderRadius: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleBtn;
