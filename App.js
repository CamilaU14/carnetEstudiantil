import React from 'react';
import { SafeAreaView } from 'react-native';
import Carnet from './components/carnet';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Carnet />
    </SafeAreaView>
  );
}
