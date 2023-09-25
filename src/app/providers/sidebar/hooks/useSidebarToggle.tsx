import { useContext } from 'react';
import { type ISidebarContext, SidebarContext } from '../context/SidebarContext';

export const useSidebarToggle = () => {
	const { isFull, setIsFull } = useContext<ISidebarContext>(SidebarContext);

	const toggleSidebar = () => {
		setIsFull(!isFull);
	};

	return { isFull, toggleSidebar };
};
