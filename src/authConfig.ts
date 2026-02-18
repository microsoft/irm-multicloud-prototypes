import { Configuration, PopupRequest } from "@azure/msal-browser";

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: "367b5007-933b-4bb4-9ee8-6838ca51ab6a",
    authority: "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47", // Microsoft tenant
    redirectUri: window.location.origin + "/irm-multicloud-prototypes/",
  },
  cache: {
    cacheLocation: "sessionStorage",
  }
};

// Scopes for the access token request
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};
