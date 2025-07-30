import React from 'react';
import { Modal, View, StyleSheet, ViewStyle } from 'react-native';
import { Text } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  style?: ViewStyle;
}

export const Dialog: React.FC<DialogProps> = ({ open, onClose, children, style, title }) => {
  const theme = useTheme();
  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles(theme).overlay}>
        <View style={[styles(theme).dialog, style]}>
          {typeof title === 'string' && (
            <Text testID="dialog-title" style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = (theme: unknown) => StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.lg,
    minWidth: 250,
    maxWidth: '90%',
    elevation: 4,
  },
});
