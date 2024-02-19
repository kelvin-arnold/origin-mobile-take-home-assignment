import React from 'react';
import {CardWrapper, TCardWrapperProps} from './_styled';
import {CustomText} from '..';

type TCustomCard = {
  message: string;
} & TCardWrapperProps;

const CustomCard: React.FC<TCustomCard> = ({message, type = 'LIGHT'}) => {
  return (
    <CardWrapper type={type}>
      <CustomText>{message}</CustomText>
    </CardWrapper>
  );
};

export default CustomCard;
