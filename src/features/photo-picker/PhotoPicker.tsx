import React from 'react';
import {
  Image,
  ImageProps,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {AVATAR_PLACEHOLDER} from '@src/images';
import {CameraIcon, ImageIcon} from './icons';

import {format} from 'date-fns';

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageType) => void;
  tag: string;
}

const PhotoPicker = (props: AvatarProps) => {
  const [image, setImage] = React.useState<ImageType | null>(null);
  const [visible, setVisible] = React.useState<boolean>(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        console.log(image.path);
        setImage(image);
        props.onChange?.(image);
      })
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image);
        props.onChange?.(image);
      })
      .finally(close);
  };

  let titleText;
  if (image?.modificationDate) {
    titleText = format(
      new Date(Number(image.modificationDate)),
      "dd/MM/yy', 'HH:mm aaaaa'm'",
    );
  } else {
    titleText = 'Tap to add photo';
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={open} style={{flex: 1}}>
        <View
          style={{
            //   flex: 1,
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.tag}</Text>
          <Text style={{fontSize: 16}}>{titleText}</Text>
        </View>
        <Image
          style={styles.avatar}
          {...props}
          source={image ? {uri: image.path} : AVATAR_PLACEHOLDER}
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        backdropTransitionOutTiming={0}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <SafeAreaView style={styles.options}>
          <Pressable style={styles.option} onPress={chooseImage}>
            <ImageIcon />
            <Text>Library </Text>
          </Pressable>
          <Pressable style={styles.option} onPress={openCamera}>
            <CameraIcon />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: '75%',
    aspectRatio: '0.75',
  },

  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoPicker;
