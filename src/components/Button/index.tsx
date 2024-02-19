import React from 'react';
import {ButtonWrapper, ButtonText, StyledButtonProps} from './_styled';
import {ActivityIndicator} from 'react-native';
// import {CustomText} from '..';

type CustonButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
} & StyledButtonProps;

const CustomButton: React.FC<CustonButtonProps> = ({
  type = 'LIGHT',
  size = 'MEDIUM',
  title,
  disabled = false,
  loading = false,
  onPress,
}) => {
  return (
    <ButtonWrapper
      type={type}
      size={size}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={14} />
      ) : (
        <ButtonText type={type}>{title}</ButtonText>
      )}
    </ButtonWrapper>
  );
};

export default CustomButton;
