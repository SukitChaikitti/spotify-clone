import React , { useContext , createContext , useReducer } from 'react';

export const DataLayerContext = createContext();

export const Datalayer = ({ initialState , reducer , children }) => {
    return (
        <DataLayerContext.Provider value = {useReducer(reducer , initialState)}>
            {children}
        </DataLayerContext.Provider>
    )
};

export const useDataLayer = () => useContext(DataLayerContext);

