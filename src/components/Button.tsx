import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, disabled, style, textStyle, testID }) => (
  <TouchableOpacity
    style={[
      styles.button,
      disabled ? styles.disabled : undefined,
      ...(Array.isArray(style) ? style : style ? [style] : []),
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.7}
    testID={testID}
  >
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: theme.colors.disabled,
  },
});
