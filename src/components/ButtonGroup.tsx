import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Button } from './Button';
import { useTheme, Theme } from '../theme/ThemeProvider';

export interface ButtonGroupProps {
  buttons: { label: string; onPress: () => void; disabled?: boolean }[];
  selectedIndex?: number;
  style?: ViewStyle;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, selectedIndex, style }) => {
  const theme = useTheme();
  return (
    <View style={[styles(theme).container, style]}>
      {buttons.map((btn, idx) => {
        const btnStyles = [
          styles(theme).button,
          selectedIndex === idx ? styles(theme).selected : undefined,
          idx !== 0 ? styles(theme).notFirst : undefined,
        ].filter(Boolean) as ViewStyle[];
        return (
          <Button
            key={btn.label}
            title={btn.label}
            onPress={btn.onPress}
            disabled={btn.disabled}
            style={btnStyles}
            testID={`button-group-item-${idx}`}
          />
        );
      })}
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  notFirst: {
    marginLeft: theme.spacing.sm,
  },
});
