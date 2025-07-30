import React from 'react';
import { View, ViewStyle } from 'react-native';

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
      {childArray.map((child, idx) => {
        // Use child.key if available, otherwise fallback to index (not ideal)
        const key = (React.isValidElement(child) && child.key != null) ? child.key : `stack-item-${idx}`;
        let spacingStyle: ViewStyle | undefined = undefined;
        if (idx !== 0) {
          if (direction === 'row') {
            spacingStyle = { marginLeft: spacing };
          } else {
            spacingStyle = { marginTop: spacing };
          }
        }
        return (
          <View key={key} style={spacingStyle}>
            {child}
          </View>
        );
      })}
    </View>
  );
};
