import React from 'react';
import {KeyboardContainer} from './_styled';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';

type CustomKeyboardViewProps = {
  children: React.ReactNode;
};

const CustomKeyboardView: React.FC<CustomKeyboardViewProps> = ({children}) => {
  return (
    <KeyboardContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardContainer>
  );
};

export default CustomKeyboardView;
