/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TransactionItem from './../TransactionItem';
import {TransactionListSeparator} from './_styled';
import {TransactionsEntity} from '../../types';
import {FlatList, RefreshControl} from 'react-native';
import {CustomCard, CustomText, CustomView} from '../../../../components';

type TransactionListProps<T> = {
  data: Array<T>;
  onRefresh: () => void;
  onItemPress: (item: TransactionsEntity) => void;
  onEndReached: () => void;
  emptyMessage: string;
  footerMessage: string;
};

const TransactionList: React.FC<TransactionListProps<TransactionsEntity>> = ({
  data,
  onRefresh,
  onItemPress,
  onEndReached,
  emptyMessage,
  footerMessage,
}) => {
  const renderFlatItem = ({item}: {item: TransactionsEntity}) => {
    return <TransactionItem {...item} onPress={() => onItemPress(item)} />;
  };

  const renderSeparator = () => <TransactionListSeparator />;

  const renderListFooterComponent = () => (
    <CustomView>
      <CustomText>{footerMessage}</CustomText>
      <CustomText weight="BOLD">Origin</CustomText>
    </CustomView>
  );

  return (
    <FlatList
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
          <CustomCard message={emptyMessage} />
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

export default TransactionList;
