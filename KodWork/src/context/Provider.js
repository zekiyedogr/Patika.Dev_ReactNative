import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux"; 
import { configureStore } from '@reduxjs/toolkit';

import reducers from "./reducers";
import initialStore from "./store";

const UserProvider = ({ children }) => {
    const [isAuthLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const userSession = await AsyncStorage.getItem('@USER');
            const favorites = await AsyncStorage.getItem('@FAVORITES');
            const companies = await AsyncStorage.getItem('@COMPANIES');

            if (userSession) {
                initialStore.user = JSON.parse(userSession);
            }

            if (favorites) {
                initialStore.favoriteList = JSON.parse(favorites);
            }
            

            if (companies) {
                initialStore.favoriteCompanyList = JSON.parse(companies);
            }
            
            setAuthLoading(false);
        };

        loadUser();
    }, []);
    
    const store = configureStore({ 
        reducer: reducers, 
        preloadedState: { 
            ...initialStore, 
            isAuthLoading 
        } 
    });

    if (isAuthLoading) {
        return null;
    }

    return <Provider store={store}>{ children }</Provider>
}

export default UserProvider;
