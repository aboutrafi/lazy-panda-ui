import React from 'react';
import { Image, View, StyleSheet, ViewStyle, Text } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface AvatarProps {
  source?: { uri: string };
  label?: string;
  size?: number;
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({ source, label, size = 40, style }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme, size).container, style]}>
      {source ? (
        <Image source={source} style={styles(theme, size).image} />
      ) : (
        <Text style={styles(theme, size).label}>{label && label.length > 0 ? label[0] : '?'}</Text>
      )}
    </View>
  );
};

const styles = (theme: any, size: number) => StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: size,
    height: size,
    borderRadius: size / 2,
  },
  label: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: size / 2,
  },
});
