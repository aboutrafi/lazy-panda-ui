import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder, style }) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <View style={style}>
      <TouchableOpacity
        testID="select-trigger"
        style={styles(theme).select}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={styles(theme).text}>{value || placeholder || 'Select...'}</Text>
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles(theme).overlay} onPress={() => setVisible(false)}>
          <View style={styles(theme).modal}>
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  testID={`select-option-${item}`}
                  style={styles(theme).option}
                  onPress={() => {
                    onChange(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles(theme).text}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = (theme: any) => StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.md,
    minWidth: 200,
    maxHeight: 300,
  },
  option: {
    padding: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
});
