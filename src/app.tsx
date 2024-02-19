/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './context';
import AppModules from './modules';
import {OriginTheme} from './theme';
import {Provider} from 'react-redux';
import {store} from './store/_store';
import {ThemeProvider} from 'styled-components';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={OriginTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <Provider store={store}>
              <AppModules />
            </Provider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
