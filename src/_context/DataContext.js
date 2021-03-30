import React, { createContext, useState, useEffect } from 'react';
import { MOCKDATA } from '../_constants'

export const DataContext = createContext({});

export const ContextData = ({children}) => {
    const [ data, setData ] = useState({});
  
    useEffect(() => {
        setData(MOCKDATA);
    },[]);

    return(
        <DataContext.Provider value={[ data, setData ]}>
            {children}
        </DataContext.Provider>
   );
};