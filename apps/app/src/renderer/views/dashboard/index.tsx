import React from 'react';
import ReactDOM from 'react-dom/client';

// Global error handler for debugging
window.onerror = (message, source, lineno, colno, error) => {
    const msg = `[Dashboard Runtime Error] ${message} at ${source}:${lineno}:${colno}`;
    console.error(msg);
    if (window.electronAPI && window.electronAPI.log) {
        window.electronAPI.log(msg);
    }
    return false;
};

console.log('[Dashboard] index.tsx absolute start');
if (window.electronAPI && window.electronAPI.log) {
    window.electronAPI.log('[Dashboard] index.tsx reached top level execution');
}

import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { store } from '../../store';
import { queryClient } from '../../lib/queryClient';
import '../../styles/global.css';
import Dashboard from './Dashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Dashboard />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
