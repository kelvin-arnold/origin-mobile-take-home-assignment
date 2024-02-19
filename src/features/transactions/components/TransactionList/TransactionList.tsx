import React from 'react';
import TransactionItem from './../TransactionItem';
import {TransactionFlatList, TransactionListSeparator} from './_styled';
import {TransactionsEntity} from '../../types';
import {RefreshControl} from 'react-native';
import {CustomCard, CustomText, CustomView} from '../../../../components';
import {TransactionListProps} from '.';

export const TransactionList: React.FC<
  TransactionListProps<TransactionsEntity>
> = ({data, onRefresh, onEndReached}) => {
  const renderFlatItem = ({item}: {item: TransactionsEntity}) => {
    return <TransactionItem {...item} onPress={onRefresh} />;
  };

  const renderSeparator = () => <TransactionListSeparator />;

  const renderListFooterComponent = () => (
    <CustomView>
      <CustomText>List of transactions</CustomText>
      <CustomText weight="BOLD">Origin</CustomText>
    </CustomView>
  );

  return (
    <TransactionFlatList
      data={data}
      contentContainerStyle={{flexGrow: 1}}
      keyExtractor={(item: TransactionsEntity) => item.Id.toString()}
      renderItem={renderFlatItem}
      ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderListFooterComponent}
      initialNumToRender={24}
      maxToRenderPerBatch={24}
      windowSize={12}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={
        <CustomView>
          <CustomCard message="Nothing to show here" />
        </CustomView>
      }
      refreshControl={
        <RefreshControl
          refreshing={false}
          progressViewOffset={8}
          tintColor="#9e9e9e"
          onRefresh={onRefresh}
        />
      }
    />
  );
};
