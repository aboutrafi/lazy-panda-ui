import React from 'react';
import { View, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';

export interface ImageListProps {
  images: ImageSourcePropType[];
  columns?: number;
  gap?: number;
  style?: ViewStyle;
}

export const ImageList: React.FC<ImageListProps> = ({ images, columns = 3, gap = 8, style }) => {
  return (
    <View style={[styles.grid, style]}>
      {images.map((src, idx) => (
        <Image
          key={idx}
          source={src}
          style={{
            width: `${100 / columns}%`,
            aspectRatio: 1,
            margin: gap / 2,
            borderRadius: 8,
          }}
          resizeMode="cover"
          testID={"image-list-item-"+idx}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
