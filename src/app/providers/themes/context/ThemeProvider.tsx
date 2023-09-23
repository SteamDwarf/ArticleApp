import { FC, PropsWithChildren, useState } from 'react'
import { ThemeContext } from './ThemeContext';
import { Themes } from '../types/types';

export const ThemeProvider:FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Themes>(Themes.LIGHT);
    const value = {theme, setTheme}

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
