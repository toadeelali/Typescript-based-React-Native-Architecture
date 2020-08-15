import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { SafeAreaView } from 'components/core/';
import ErrorBoundary from 'containers/ErrorBoundary';
import themes from 'themes';
import RootNavigator from './RootNavigator';

const MainStackNav = () => {
  const { theme } = useSelector(state => state.Theme);
  useEffect(() => {
    console.log(themes.getTheme(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={themes.getTheme(theme)}>
      <SafeAreaView>
        <ErrorBoundary>
          <RootNavigator />
        </ErrorBoundary>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default MainStackNav;
