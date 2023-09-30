import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme/index.js';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen.js';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    null;
  }
  return (
    <>
      <ThemeProvider theme={theme} >
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}


