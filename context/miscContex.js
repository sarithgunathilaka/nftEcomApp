import React, { createContext, useState } from 'react';

const defaultValues = {
    isLoading: false,
    favorites: [],
    setIsLoading: () => undefined,
    setFavorites: () => undefined,
};

export const MiscContext = createContext(defaultValues);

export const MiscContextProvider = ({ children }) => {
    // states
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

    console.log('dd', favorites);

    // exports
    const contextValues = {
        isLoading,
        setIsLoading,
        favorites,
        setFavorites
    };

    return <MiscContext.Provider value={contextValues}>{children}</MiscContext.Provider>;
};
