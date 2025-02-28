import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { PaperProvider } from 'react-native-paper';
import { CombinedDefaultTheme, CombinedDarkTheme } from './theme';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import { useAppSelector } from './redux/hooks';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

function ThemeWrapper() {
  const isThemeDark = useAppSelector((state) => state.theme.isThemeDark);
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <Navigation theme={theme} />
    </PaperProvider>
  );
}

export function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeWrapper />
    </ReduxProvider>
  );
}
