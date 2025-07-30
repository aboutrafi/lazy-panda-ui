import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  style?: ViewStyle;
}

export const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = 8, style }) => {
  const childArray = React.Children.toArray(children);
  return (
    <View style={[styles.grid, style]}> 
      {childArray.map((child, idx) => (
        <View
          key={idx}
          style={{
            width: ""+100 / columns+"%",
            padding: gap / 2,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
