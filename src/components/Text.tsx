import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { theme } from '../theme';

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
    fontSize: 16,
  },
});
