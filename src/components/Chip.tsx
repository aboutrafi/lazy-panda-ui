import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface ChipProps {
  label: string;
  onPress?: () => void;
  selected?: boolean;
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({ label, onPress, selected, style }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles(theme).chip,
        selected && styles(theme).selected,
        style,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      disabled={!onPress}
    >
      <Text style={styles(theme).label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = (theme: any) => StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 16,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  selected: {
    backgroundColor: theme.colors.primary,
  },
  label: {
    color: theme.colors.text,
    fontWeight: '500',
  },
});
