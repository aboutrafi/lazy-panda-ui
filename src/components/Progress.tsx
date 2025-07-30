import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface ProgressProps {
  value: number; // 0 to 1
  style?: ViewStyle;
}

export const Progress: React.FC<ProgressProps> = ({ value, style }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme).container, style]}>
      <View style={[styles(theme).bar, { width: ""+Math.max(0, Math.min(1, value)) * 100+"%" }]} />
    </View>
  );
};

const styles = (theme: any) => StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: theme.colors.border,
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
  },
  bar: {
    height: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
});
