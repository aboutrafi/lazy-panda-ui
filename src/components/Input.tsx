import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps, Text } from 'react-native';
import { useTheme, Theme } from '../theme/ThemeProvider';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
  const theme = useTheme();
  return (
    <View style={{ marginBottom: theme.spacing.md }}>
      {(Boolean(label)) && <Text style={[styles(theme).label]}>{label}</Text>}
      <TextInput
        style={[styles(theme).input, style]}
        placeholderTextColor={theme.colors.border}
        {...props}
      />
      {error ? <Text style={styles(theme).error}>{error}</Text> : null}
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  label: {
    marginBottom: 4,
    color: theme.colors.text,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.sm,
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});
