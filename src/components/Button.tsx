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


export const Button: React.FC<ButtonProps> = ({ title, onPress, disabled, style, textStyle, testID }) => {
  let styleArray: ViewStyle[] = [];
  if (Array.isArray(style)) {
    styleArray = style;
  } else if (style) {
    styleArray = [style];
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.disabled : undefined,
        ...styleArray,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

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
