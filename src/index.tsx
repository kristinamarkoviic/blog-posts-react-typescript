import './index.scss';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { CoreProvider } from 'core';
//components
import App from './App';

ReactDOM.render(
    <StrictMode>
        <CoreProvider>
            <App />
        </CoreProvider>
    </StrictMode>,
    document.getElementById('root')
);
