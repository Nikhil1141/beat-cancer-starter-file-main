import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { PrivyProvider } from '@privy-io/react-auth';
import { StateContextProvider } from './context'

// privy auth provider
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <PrivyProvider
        appId="cm6z0u88t00yxpt2727ktzfym"
        config={{
            // Customize Privy's appearance in your app
            appearance: {
                theme: 'dark',
            },
        }}
    >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </PrivyProvider>
)