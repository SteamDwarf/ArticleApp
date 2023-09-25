import { createContext } from 'react';

export interface ISidebarContext {
	isFull: boolean
	setIsFull: (state: boolean) => void
}

const defaultValue: ISidebarContext = {
	isFull: true,
	setIsFull: (_) => null,
};

export const SidebarContext = createContext<ISidebarContext>(defaultValue);
