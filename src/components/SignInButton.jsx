// src/components/SignInButton.jsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {

    const { instance } = useMsal();

    const handleLogin = () => {
        console.log("=== [DEBUG] Initiating Microsoft Login ===");
        console.log("Login Request Payload details:", JSON.stringify(loginRequest, null, 2));

        // This acts as a manual breakpoint. With Developer Tools (F12) open, it will pause here!
        debugger;

        instance.loginRedirect(loginRequest).catch(e => {
            console.error("=== [DEBUG] Login Redirect Failed ===");
            console.error(e);
        });
    };

    return (
        <button onClick={handleLogin} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Sign in with Microsoft
        </button>
    );
};