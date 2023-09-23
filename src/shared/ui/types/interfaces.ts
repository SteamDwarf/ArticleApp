import { ReactNode } from "react"

export interface IComponentProps {
    className?: string,
    children?: ReactNode
}

export interface IButtonProps extends IComponentProps{
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}