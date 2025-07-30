import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
  style?: ViewStyle;
}

export const Stack: React.FC<StackProps> = ({ children, direction = 'column', spacing = 8, style }) => {
  const childArray = React.Children.toArray(children);
  return (
    <View style={[{ flexDirection: direction }, style]}>
      {childArray.map((child, idx) => (
        <View key={idx} style={idx !== 0 ? (direction === 'row' ? { marginLeft: spacing } : { marginTop: spacing }) : undefined}>
          {child}
        </View>
      ))}
    </View>
  );
};
