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
import {Controller, useForm} from 'react-hook-form';
import {signUpSchema, SignUpSchemaType} from './../validations';
import {zodResolver} from '@hookform/resolvers/zod';
import {useSignUp} from './../hooks/useSignup';

const LayoutSignUp: React.FC = () => {
  const {loading, error, signUp} = useSignUp();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchemaType) => signUp(data);

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
                    label="Name"
                    keyboardType="default"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="E-mail"
                    editable={!loading}
                    error={errors.email?.message}
                  />
                )}
                name="name"
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    label="E-mail"
                    autoComplete="email"
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
                    editable={!loading}
                    error={errors.password?.message}
                    secureTextEntry
                  />
                )}
                name="password"
              />
              <CustomButton
                disabled={!isValid || loading}
                loading={loading}
                onPress={handleSubmit(onSubmit)}
                title="Signup"
              />
              {error && <CustomCard message={error.message} />}
            </CustomViewForm>
          </CustomView>
        </CustomViewColum>
      </CustomKeyboardView>
    </CustomSafeView>
  );
};

export default LayoutSignUp;
