// src/App.jsx
import React, { useEffect } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";

function App() {
  const { accounts, instance } = useMsal();
  
  useEffect(() => {
    console.log("=== [DEBUG] React App Rendered ===");
    console.log("1. All accounts in cache:", accounts);
    console.log("2. Active account:", instance.getActiveAccount());
  }, [accounts, instance]);

  const name = accounts[0]?.name; // Get user's name from the first account

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>SecureTask</h1>

      {/* Content shown ONLY when logged in */}
      <AuthenticatedTemplate>
        <h2>Welcome, {name}!</h2>
        <p>You are successfully signed in via Azure SSO.</p>
        <button onClick={() => window.location.reload()}>Sign Out</button>
      </AuthenticatedTemplate>

      {/* Content shown ONLY when NOT logged in */}
      <UnauthenticatedTemplate>
        <p>Please sign in to access your dashboard.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;