import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, Theme } from '../theme/ThemeProvider';

export type AlertType = 'success' | 'info' | 'warning' | 'error';
export interface AlertProps {
  message: string;
  type?: AlertType;
  style?: ViewStyle;
}

const typeColors = (theme: any) => ({
  success: '#4caf50',
  info: '#2196f3',
  warning: '#ff9800',
  error: '#f44336',
});

export const Alert: React.FC<AlertProps> = ({ message, type = 'info', style }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme, type).container, style]}>
      <Text style={styles(theme, type).text}>{message}</Text>
    </View>
  );
};

const styles = (theme: Theme, type: AlertType) => StyleSheet.create({
  container: {
    backgroundColor: typeColors(theme)[type],
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius,
    marginVertical: theme.spacing.sm,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
