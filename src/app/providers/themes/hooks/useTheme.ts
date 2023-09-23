import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";
import { Themes } from "../types/types";

export const useTheme = () => {
    const {theme, setTheme} = useContext<IThemeContext>(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme(newTheme);
    }

    return {theme, toggleTheme}
}