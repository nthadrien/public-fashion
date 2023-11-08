/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router';
import './index.css';
import App from './App';
import { AuthorizationsProvider } from './contexts/auth';

const root = document.getElementById('root');
render(() => <Router>
    <AuthorizationsProvider>
        <App />
    </AuthorizationsProvider>
</Router>, root);