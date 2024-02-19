import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthLayoutSignin,
  AuthLayoutSignup,
  AuthOnboarding,
} from './../features/authentication';

const Modules = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Group
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="Onboarding" component={AuthOnboarding} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerBackVisible: true,
        }}>
        <Stack.Screen name="Signin" component={AuthLayoutSignin} />
        <Stack.Screen name="Signup" component={AuthLayoutSignup} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Modules;
