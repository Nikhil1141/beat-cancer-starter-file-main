import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
// import { Buffer } from "buffer";
// window.Buffer = Buffer;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <PrivyProvider
        appId="cm6z0u88t00yxpt2727ktzfym"
        config={{
            appearance: {
                theme: "dark",
            },
            embeddedWallets: {
                createOnLogin: "users-without-wallets",
            },
        }}
    >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </PrivyProvider>,
);
