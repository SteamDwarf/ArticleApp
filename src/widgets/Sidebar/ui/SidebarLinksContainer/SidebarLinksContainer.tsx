import { ISidebarLink } from "entities/SidebarLinks/types/types"
import { FC } from "react"
import { LinkWithIcon } from "shared/ui/LinkWithIcon/LinkWithIcon"
import { IComponentProps } from "shared/ui/types/interfaces"
import styles from './SidebarLinksContainer.module.scss';
import { classNames } from "shared/lib/classNames";
import { useSidebarToggle } from "app/providers/sidebar";

interface ISidebarLinksContainer extends IComponentProps {
    title?: string,
    linksData: ISidebarLink[]
}

export const SidebarLinksContainer:FC<ISidebarLinksContainer> = ({linksData, title, className}) => {
    const {isFull} = useSidebarToggle();

    return (
        <div className={classNames(className, styles.container)}>
            {title && isFull && <h3 className={styles.title}>{title}</h3>}
            {linksData.map(link => {
                return <LinkWithIcon key={link.text} to={link.url} icon={link.icon}>{link.text}</LinkWithIcon>
            })}
        </div>
    )
}
