import React from 'react';
import MainScreen from './src/screens/MainScreen';
import ErrorBoundary from './src/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <MainScreen />
    </ErrorBoundary>
  );
}
