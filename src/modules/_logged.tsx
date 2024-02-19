import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './../context/auth';

import {
  RepositoriesLayoutDetail,
  RepositoriesLayoutList,
  RepositoriesLayoutReceipt,
} from '../features/transactions';
import {Provider} from 'react-redux';
import {RepositoryStore} from '../features/transactions/store';
import {CustomButton, CustomText} from '../components';

const LoggedModules = () => {
  const Stack = createNativeStackNavigator();
  const context = React.useContext(AuthContext);

  const headerLeftComponent = () => {
    return null;
  };

  const headerTitleComponent = () => {
    return (
      <CustomText weight="BOLD" type="SMALL">
        Transactions
      </CustomText>
    );
  };

  const headerRightComponent = () => {
    return (
      <CustomButton
        type="LINK"
        size="SMALL"
        onPress={context.clearuserSession}
        title="Clear"
      />
    );
  };

  return (
    <Provider store={RepositoryStore}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Group
          screenOptions={{
            headerBackVisible: true,
          }}>
          <Stack.Screen
            options={{
              headerLeft: headerLeftComponent,
              headerTitle: headerTitleComponent,
              headerRight: headerRightComponent,
            }}
            name="List"
            component={RepositoriesLayoutList}
          />
          <Stack.Screen name="Detail" component={RepositoriesLayoutDetail} />
          <Stack.Screen name="Receipt" component={RepositoriesLayoutReceipt} />
        </Stack.Group>
      </Stack.Navigator>
    </Provider>
  );
};

export default LoggedModules;
