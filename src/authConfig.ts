import { Configuration, RedirectRequest } from "@azure/msal-browser";

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: "367b5007-933b-4bb4-9ee8-6838ca51ab6a",
    authority: "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47", // Microsoft tenant
    redirectUri: window.location.origin + "/irm-multicloud-prototypes/",
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "localStorage",
  }
};

// Scopes for the access token request
export const loginRequest: RedirectRequest = {
  scopes: ["User.Read"]
};

// Azure Data Explorer scope for o365monweu cluster
export const adxRequest = {
  scopes: ["https://kusto.kusto.windows.net/user_impersonation"]
};
