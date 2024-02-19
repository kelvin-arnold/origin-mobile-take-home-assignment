import React from 'react';
import {
  CustomButton,
  CustomSafeView,
  CustomText,
  CustomView,
  CustomViewColum,
} from '../../../components';
import {useLinkTo} from '@react-navigation/native';
import {AuthFooterView} from '../components/AuthOnboarding';

const LayoutOnboarding: React.FC = () => {
  const linkTo = useLinkTo();

  return (
    <CustomSafeView>
      <CustomViewColum>
        <CustomView>
          <CustomText weight="BOLD" type="LARGE">
            Onboarding
          </CustomText>
        </CustomView>
        <AuthFooterView>
          <CustomButton
            title="Sign in"
            onPress={() => {
              linkTo('/Signin');
            }}
          />
          <CustomButton
            type="LINK"
            title="Sign up"
            onPress={() => {
              linkTo('/Signup');
            }}
          />
        </AuthFooterView>
      </CustomViewColum>
    </CustomSafeView>
  );
};

export default LayoutOnboarding;
