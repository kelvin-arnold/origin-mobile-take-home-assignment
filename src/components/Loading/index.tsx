import React from 'react';
import {LoadingView, ActivityIndicator} from './_styled';
import {CustomText} from '..';

type TCustomViewProps = {
  children?: React.ReactNode;
  message: string;
};

export default ({message}: TCustomViewProps) => {
  return (
    <LoadingView>
      <CustomText>{message}</CustomText>
      <ActivityIndicator />
    </LoadingView>
  );
};
