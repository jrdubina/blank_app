import React, { createContext, useState, useEffect } from 'react';
import { THEMES } from '../_constants'

export const ThemeContext = createContext({});

export const ContextTheme = ({children}) => {
    const [ theme, setTheme ] = useState({});
  
    useEffect(() => {
        setTheme(THEMES.DEFAULT_THEME);
    },[theme]);

    return(
        <ThemeContext.Provider value={[ theme, setTheme ]}>
            {children}
        </ThemeContext.Provider>
   );
};