import React, { createContext } from "react";
import { useFetch } from "../helpers/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const { data, loading } = useFetch();

    return (
        <DataContext.Provider
            value= {{
                data,
                loading
            }}
        >
            { children }
        </DataContext.Provider>
    )
}