import React from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface SwitchProps extends RNSwitchProps {}

export const Switch: React.FC<SwitchProps> = (props) => {
  const theme = useTheme();
  return (
    <RNSwitch
      trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
      thumbColor={props.value ? theme.colors.primary : theme.colors.card}
      ios_backgroundColor={theme.colors.border}
      {...props}
    />
  );
};
