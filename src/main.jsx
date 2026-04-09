import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import App from './App.jsx'

import './index.css'

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  console.log("=== [DEBUG] MSAL Initialized ===");
  // MSAL requires handleRedirectPromise to process the redirect response in popups and close the window
  msalInstance.handleRedirectPromise().then((response) => {
    console.log("=== [DEBUG] handleRedirectPromise completely resolved ===");
    console.log("3. Redirect Response Object:", response);

    // If login was successful via redirect/popup, set the active account
    if (response !== null && response.account !== null) {
      console.log("4a. Found redirect response account! Setting active...");
      msalInstance.setActiveAccount(response.account);
    } else {
      // If already logged in, but page is refreshed, set active account
      const accounts = msalInstance.getAllAccounts();
      console.log("4b. No immediate redirect response. Current cached accounts during hydration:", accounts);

      if (!msalInstance.getActiveAccount() && accounts.length > 0) {
        console.log("4c. Setting active account from cache manually...");
        msalInstance.setActiveAccount(accounts[0]);
      }
    }

    createRoot(document.getElementById('root')).render(
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    );
  }).catch(e => {
    console.error("=== [DEBUG] handleRedirectPromise ERROR ===", e);
  });

});
