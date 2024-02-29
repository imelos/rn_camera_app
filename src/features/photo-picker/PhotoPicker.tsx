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

import {formatDate} from '@src/utils/format-date';

import ImageTitle from '@src/components/image-title/ImageTitle';

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageType) => void;
  tag: string;
}

const PhotoPicker: React.FC<AvatarProps> = props => {
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
  if (image) {
    titleText = formatDate(Number(image.modificationDate ?? 0));
  } else {
    titleText = 'Tap to add photo';
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={open} style={styles.opacityContainer}>
        <ImageTitle title={props.tag} subTitle={titleText} />
        <Image
          style={styles.image}
          source={image ? {uri: image.path} : AVATAR_PLACEHOLDER}
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        backdropTransitionOutTiming={0}
        style={styles.modal}>
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  opacityContainer: {
    flex: 1,
  },
  image: {
    paddingTop: 20,
    height: '75%',
    aspectRatio: '0.75',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
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
