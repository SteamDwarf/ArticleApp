import { IComponentProps } from 'shared/ui/types/interfaces';
import styles from './Header.module.scss';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitchButton } from 'widgets/ThemeSwitchButton';
import { IconWrapper } from 'shared/ui/IconWrapper';
import { ProfileWidget } from 'widgets/ProfileWidget';
import Logo from 'assets/icons/Logo.svg';
import { RoutesPathes } from 'shared/configs/routing';

//TODO сделать ProfileWidget
export const Header:FC<IComponentProps> = ({className}) => {
    return (
        <div className={classNames(styles.header, className)}>
            <div>
                <AppLink to={RoutesPathes.home}>
                    <IconWrapper>
                        <Logo />
                    </IconWrapper>
                </AppLink>
            </div>
            <div className={styles.leftActions}>
                <ThemeSwitchButton />
                <ProfileWidget />
            </div>
            {/* <nav>
                <AppLink to={RoutesPathes.home}>Главная</AppLink>
                <AppLink to={RoutesPathes.about}>О нас</AppLink>
            </nav> */}
        </div>
    )
}
