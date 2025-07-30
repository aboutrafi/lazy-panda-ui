import React from 'react';
import { View, Text, StyleSheet, ScrollView, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface TableProps {
  columns: string[];
  data: string[][];
  style?: ViewStyle;
}

export const Table: React.FC<TableProps> = ({ columns, data, style }) => {
  const theme = useTheme();
  return (
    <ScrollView horizontal style={style}>
      <View>
        <View style={styles(theme).row}>
          {columns.map(col => (
            <Text key={col} style={[styles(theme).cell, styles(theme).header]}>{col}</Text>
          ))}
        </View>
        {data.map((row, idx) => (
          <View key={idx} style={styles(theme).row}>
            {row.map((cell, cidx) => (
              <Text key={cidx} style={styles(theme).cell}>{cell}</Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = (theme: any) => StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    minWidth: 80,
    color: theme.colors.text,
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: theme.colors.card,
  },
});
