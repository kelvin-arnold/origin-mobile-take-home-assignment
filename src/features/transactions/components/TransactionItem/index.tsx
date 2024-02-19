import React from 'react';
import {TransactionsEntity} from '../../types';
import {CustomText, CustomViewColum} from '../../../../components';
import {TransactionWrapper, TransactionImage} from './_styled';

type TransactionProps = {
  onPress: () => void;
};

const Transaction: React.FC<TransactionsEntity & TransactionProps> = ({
  Id,
  Vendor,
  Date,
  Amount,
  ReceiptImage,
  onPress,
}) => {
  return (
    <TransactionWrapper key={Id} onPress={onPress}>
      <TransactionImage
        source={{
          uri: ReceiptImage,
        }}
      />
      <CustomViewColum>
        <CustomText type="MEDIUM" weight="BOLD">
          {Vendor}
        </CustomText>
        <CustomText>{Amount}</CustomText>
        <CustomText color="INFO">{Date}</CustomText>
      </CustomViewColum>
    </TransactionWrapper>
  );
};

export default React.memo(Transaction);
