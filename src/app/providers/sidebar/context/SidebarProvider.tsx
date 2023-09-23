import { FC, PropsWithChildren, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider:FC<PropsWithChildren> = ({children}) => {
    const [isFull, setIsFull] = useState(true);
    const value = {isFull, setIsFull}

    return (
        <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
    )
}