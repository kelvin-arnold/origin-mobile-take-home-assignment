import React from 'react';
import {StyledText, StyledTextTypes} from './_styled';

type CustomTextProps = {
  children?: React.ReactNode;
} & StyledTextTypes;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  type = 'SMALL',
  color,
  weight = 'NORMAL',
}) => {
  return (
    <StyledText weight={weight} type={type} color={color}>
      {children}
    </StyledText>
  );
};

export default CustomText;
