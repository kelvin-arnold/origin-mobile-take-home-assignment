import React from 'react';
import {
  CustomView,
  CustomSafeView,
  CustomButton,
  CustomKeyboardView,
  CustomViewColum,
  CustomViewForm,
  CustomTextInput,
  CustomCard,
} from '../../../components';
import {useLinkTo} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {signInSchema, SignInSchemaType} from './../validations';
import {zodResolver} from '@hookform/resolvers/zod';
import {useSignin} from './../hooks/useSignin';

const LayoutSignin: React.FC = () => {
  const linkTo = useLinkTo();
  const {loading, error, signinUser} = useSignin();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInSchemaType) => signinUser(data);

  return (
    <CustomSafeView>
      <CustomKeyboardView>
        <CustomViewColum>
          <CustomView>
            <CustomViewForm>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    label="E-mail"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="E-mail"
                    editable={!loading}
                    error={errors.email?.message}
                  />
                )}
                name="email"
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    label="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    secureTextEntry
                    editable={!loading}
                    error={errors.password?.message}
                  />
                )}
                name="password"
              />
              <CustomButton
                disabled={!isValid || loading}
                onPress={handleSubmit(onSubmit)}
                title="Sign in"
                loading={loading}
              />
              <CustomButton
                disabled={loading}
                type="LINK"
                onPress={() => linkTo('/Signup')}
                title="Don't have account? Sign up"
              />
              {error && <CustomCard message={error.message} />}
            </CustomViewForm>
          </CustomView>
        </CustomViewColum>
      </CustomKeyboardView>
    </CustomSafeView>
  );
};

export default LayoutSignin;
