import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "affa1006-a101-4112-802d-84fd45f97172",
        authority: "https://login.microsoftonline.com/718cfced-176d-4f5f-b719-7ee78694f1c8",
        redirectUri: "http://localhost:5173",
    },
    cache: {
        cacheLocation: "sessionStorage", // or localStorage
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) { return; }
                console.log(`[MSAL_INTERNAL_LOG] ${message}`);
            },
            logLevel: LogLevel.Verbose,
        }
    }
};

// Scopes you want the user to consent to
export const loginRequest = {
    scopes: ["User.Read"],
    prompt: "consent" // Forces the Azure consent window to show on every login!
};