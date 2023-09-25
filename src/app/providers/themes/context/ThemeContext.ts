import { createContext } from 'react';
import { Themes } from '../types/types';

export interface IThemeContext {
	theme: Themes
	setTheme: (newTheme: Themes) => void
}

const defaultValue: IThemeContext = {
	theme: Themes.LIGHT,
	setTheme: (_) => null,
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);
