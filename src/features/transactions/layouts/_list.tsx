import React from 'react';
import {
  CustomButton,
  CustomCard,
  CustomView,
  CustomViewColum,
  LoadingView,
} from '../../../components';
import {useFetchTransactions} from './../hooks/useFetchTransactions';
import {useAppDispatch} from './../store/_storeHooks';
import {sliceTransactions} from './../store/_storeRepositories';

import {useLinkTo} from '@react-navigation/native';
import TransactionList from '../components/TransactionList';

const LayoutList: React.FC = () => {
  const linkTo = useLinkTo();
  const {loading, data, error, setPageList, fetchData} = useFetchTransactions();
  const dispatch = useAppDispatch();

  return (
    <CustomView>
      <CustomViewColum>
        {loading && !data && <LoadingView message="Loading Transactions" />}

        {error && (
          <CustomView>
            <CustomCard type="ERROR" message={error.message} />
            <CustomButton
              title="Try again"
              type="LINK"
              onPress={() => {
                fetchData();
              }}
            />
          </CustomView>
        )}

        {data && data.Transactions?.length && (
          <TransactionList
            data={data.Transactions}
            onItemPress={item => {
              dispatch(sliceTransactions.actions.setTransaction(item));
              linkTo('/Detail');
            }}
            onRefresh={() => {
              fetchData();
            }}
            onEndReached={() => {
              setPageList(prev => prev + 1);
            }}
            emptyMessage={'Nothing to show here'}
            footerMessage={'List of transactions'}
          />
        )}
      </CustomViewColum>
    </CustomView>
  );
};

export default LayoutList;
