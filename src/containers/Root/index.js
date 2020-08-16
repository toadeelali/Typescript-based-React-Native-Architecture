import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { SafeAreaView } from 'components/core/';
import ErrorBoundary from 'containers/ErrorBoundary';
import { themeActions } from 'themes';
import RootNavigator from './RootNavigator';

const MainStackNav = () => {
  const { current } = useSelector(state => state.theme);
  useEffect(() => {
    console.log(themeActions.get(current));
  }, [current]);

  return (
    <ThemeProvider theme={themeActions.get(current)}>
      <SafeAreaView>
        <ErrorBoundary>
          <RootNavigator />
        </ErrorBoundary>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default MainStackNav;
