import React from 'react';

import { WebSocketProvider } from './src/Contexts/WebSocketContext';
import AppNavigation from './src/Navigation/AppNavigation';

export default function App() {
  return (
    <WebSocketProvider>
      <AppNavigation />
    </WebSocketProvider>
  );
}
