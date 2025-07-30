import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface SnackbarProps {
  message: string;
  open: boolean;
  style?: ViewStyle;
}

export const Snackbar: React.FC<SnackbarProps> = ({ message, open, style }) => {
  const theme = useTheme();
  if (!open) return null;
  return (
    <View style={[styles(theme).container, style]}>
      <Text style={styles(theme).text}>{message}</Text>
    </View>
  );
};

const styles = (theme: any) => StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
    backgroundColor: theme.colors.text,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.md,
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    color: theme.colors.background,
    fontSize: 16,
  },
});
