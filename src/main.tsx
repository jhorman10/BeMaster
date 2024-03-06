import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginContextProvider } from './auth/context/loginProvider';
import { MockContextProvider } from './context/mockProvider';
import { AppRouter } from './routes/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginContextProvider>
      <MockContextProvider>
        <AppRouter />
      </MockContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
