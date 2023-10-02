import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map</Text>;

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
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Settings} />
            <Tab.Screen name="Settings" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}


