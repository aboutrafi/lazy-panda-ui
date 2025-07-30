import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({ children, style, maxWidth = 1200 }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme, maxWidth).container, style]}>{children}</View>
  );
};

const styles = (theme: any, maxWidth: number) => StyleSheet.create({
  container: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
});
