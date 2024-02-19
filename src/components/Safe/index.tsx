import React from 'react';
import {CustomSafeView} from './_styled';

type TCustomSafeViewProps = {
  children: React.ReactNode;
};

export default ({children}: TCustomSafeViewProps) => {
  return <CustomSafeView>{children}</CustomSafeView>;
};
