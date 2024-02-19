import React from 'react';
import {
  CustomViewColum,
  CustomText,
  CustomButton,
  CustomCard,
} from '../../../components';
import {useAppSelector} from './../store/_storeHooks';
import {
  TransactionFullWrapper,
  TransactionFullBody,
  TransactionFullHeader,
  TransactionFullImage,
  TransactionFullCard,
} from './../components/TransactionFull';
import {useLocation} from './../hooks/useLocation';
import {useUpdateCoordinates} from './../hooks/useUpdateCoordinates';

import {ScrollView} from 'react-native';
import {useLinkTo} from '@react-navigation/native';

const LayoutDetail: React.FC = () => {
  const linkTo = useLinkTo();
  const transaction = useAppSelector(state => state.transactions.transaction);

  const location = useLocation();
  const {loading, error, success, attachCoordinates} = useUpdateCoordinates();

  const sendCoordinates = () => {
    if (!transaction) {
      return;
    }
    attachCoordinates(transaction.Id, {
      Lat: location.latitude ?? 0,
      Lon: location.latitude ?? 0,
    });
  };

  return (
    <ScrollView>
      <CustomViewColum>
        <TransactionFullWrapper>
          {transaction?.ReceiptImage && (
            <TransactionFullHeader>
              <TransactionFullImage
                source={{
                  uri: transaction.ReceiptImage,
                }}
              />
            </TransactionFullHeader>
          )}
          <TransactionFullBody>
            <CustomText type="EXTRA_LARGE" weight="BOLD">
              {transaction?.Vendor}
            </CustomText>
            <TransactionFullCard>
              <CustomText>{transaction?.Category}</CustomText>
              <CustomText>{transaction?.Type}</CustomText>
              <CustomText>{transaction?.Date}</CustomText>
            </TransactionFullCard>
            <CustomText type="MEDIUM" weight="BOLD">
              Transaction Location
            </CustomText>
            <TransactionFullCard>
              <CustomText>Latitude: {transaction?.Lat}</CustomText>
              <CustomText>Longitude: {transaction?.Lon}</CustomText>
            </TransactionFullCard>
            <CustomText type="MEDIUM" weight="BOLD">
              My current Location
            </CustomText>
            <TransactionFullCard>
              <CustomText>Latitude: {location.latitude}</CustomText>
              <CustomText>Longitude: {location.longitude}</CustomText>
            </TransactionFullCard>
            <CustomButton
              title="Attach coordinates"
              onPress={sendCoordinates}
              disabled={loading}
              loading={loading}
            />
            <CustomButton
              title="Update receipt"
              type="LINK"
              onPress={() => linkTo('/Receipt')}
              disabled={loading}
            />
            {error && <CustomCard type="ERROR" message={error.message} />}
            {success && <CustomCard type="INFO" message={success.message} />}
          </TransactionFullBody>
        </TransactionFullWrapper>
      </CustomViewColum>
    </ScrollView>
  );
};

export default LayoutDetail;
