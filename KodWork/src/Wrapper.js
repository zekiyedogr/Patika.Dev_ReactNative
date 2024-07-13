import React from "react";
import Router from "./Router";
import UserProvider from "./context/Provider";

export default () => {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    )
}