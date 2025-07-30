import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface BadgeProps {
  value: string | number;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({ value, style }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme).container, style]}>
      <Text style={styles(theme).text}>{value}</Text>
    </View>
  );
};

const styles = (theme: unknown) => StyleSheet.create({
  container: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
