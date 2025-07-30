import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, Theme } from '../theme/ThemeProvider';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, style }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles(theme).header}
        onPress={function() { return setOpen(o => !o) }}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        testID="accordion-header"
      >
        <Text style={styles(theme).title}>{title}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles(theme).content} testID="accordion-content">
          {children}
        </View>
      )}
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
  },
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderBottomLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
  },
});
