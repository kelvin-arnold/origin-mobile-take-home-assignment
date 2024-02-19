import React from 'react';
import {View, Text, StyleSheet, TextInputProps} from 'react-native';
import {TextInput} from './_styled';

interface CustomTextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps & TextInputProps> = ({
  label,
  error,
  ...args
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...args} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
