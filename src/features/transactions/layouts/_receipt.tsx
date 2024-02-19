import React from 'react';
import {
  CustomViewColum,
  CustomText,
  CustomButton,
  CustomCard,
  CustomTextInput,
} from '../../../components';
import {useAppSelector} from './../store/_storeHooks';
import {
  TransactionFullWrapper,
  TransactionFullBody,
  TransactionReceipt,
} from './../components/TransactionFull';
import {useUpdateReceipt} from './../hooks/useUpdateReceipt';

import {Controller, useForm} from 'react-hook-form';
import {ReceiptSchemaType, receiptSchema} from './../validations';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView} from 'react-native';

const LayoutDetail: React.FC = () => {
  const transaction = useAppSelector(state => state.transactions.transaction);

  const {loading, error, success, attachReceipt} = useUpdateReceipt();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<ReceiptSchemaType>({
    resolver: zodResolver(receiptSchema),
  });

  const onSubmit = (data: ReceiptSchemaType) => {
    if (!transaction) {
      return;
    }
    attachReceipt(transaction.Id, data.receipt);
  };
  return (
    <ScrollView>
      <CustomViewColum>
        <TransactionFullWrapper>
          <TransactionFullBody>
            <CustomText type="LARGE" weight="BOLD">
              Update receipt
            </CustomText>
            <TransactionReceipt>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    label="Receipt url"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Copy here your receipt url address"
                    editable={!loading}
                    error={errors.receipt?.message}
                  />
                )}
                name="receipt"
              />
              <CustomButton
                title="Update receipt"
                disabled={!isValid || loading}
                type="LINK"
                loading={loading}
                onPress={handleSubmit(onSubmit)}
              />
            </TransactionReceipt>
            {error && <CustomCard type="ERROR" message={error.message} />}
            {success && <CustomCard type="INFO" message={success.message} />}
          </TransactionFullBody>
        </TransactionFullWrapper>
      </CustomViewColum>
    </ScrollView>
  );
};

export default LayoutDetail;
