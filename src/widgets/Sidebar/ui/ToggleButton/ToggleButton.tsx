import React, { FC } from 'react'
import { IconButton } from 'shared/ui/IconButton';
import ToggleIcon from "assets/icons/sidebar/toggle.svg";
import { Size } from 'shared/ui/types/enums';
import styles from './ToggleButton.module.scss';
import { IButtonProps, IComponentProps } from 'shared/ui/types/interfaces';
import { classNames } from 'shared/lib/classNames';
import { useSidebarToggle } from 'app/providers/sidebar';

export const ToggleButton:FC<IComponentProps> = ({className}) => {
    const {toggleSidebar} = useSidebarToggle();

    const onClick = () => toggleSidebar();

    return (
        <IconButton onClick={onClick} className={classNames(className, styles.button)} size={Size.SMALL}>
            <ToggleIcon />
        </IconButton>
    )
}
