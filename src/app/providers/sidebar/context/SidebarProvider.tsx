import {
	FC, PropsWithChildren, useState, useMemo,
} from 'react';
import { ISidebarContext, SidebarContext } from './SidebarContext';

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isFull, setIsFull] = useState(true);
	const value = useMemo<ISidebarContext>(() => ({ isFull, setIsFull }), [isFull]);

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
};
