import React from 'react';
import { useFonts } from 'expo-font';
import StackNavigation from './navigation/navigation';

export default function App() {

  const [loaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <StackNavigation />
  );
}
