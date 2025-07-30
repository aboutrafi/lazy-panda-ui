import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme, Theme } from '../theme/ThemeProvider';

export interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
  style?: TextStyle;
}

const variantStyles = (theme: Theme) => ({
  h1: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text },
  h2: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  h3: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text },
  h4: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text },
  h5: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text },
  h6: { fontSize: 16, fontWeight: 'bold', color: theme.colors.text },
  subtitle1: { fontSize: 16, color: theme.colors.text },
  subtitle2: { fontSize: 14, color: theme.colors.text },
  body1: { fontSize: 16, color: theme.colors.text },
  body2: { fontSize: 14, color: theme.colors.text },
  caption: { fontSize: 12, color: theme.colors.text },
  overline: { fontSize: 10, color: theme.colors.text, textTransform: 'uppercase' },
});

export const Typography: React.FC<TypographyProps> = ({ children, variant = 'body1', style }) => {
  const theme = useTheme();
  return (
    <Text style={[variantStyles(theme)[variant], style]}>{children}</Text>
  );
};
