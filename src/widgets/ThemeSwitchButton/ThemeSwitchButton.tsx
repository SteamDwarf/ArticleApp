import { IconButton } from 'shared/ui/IconButton'
import LightThemeIcon from '../../assets/icons/light-theme.svg';
import DarkThemeIcon from '../../assets/icons/dark-theme.svg';
import { useTheme } from 'app/providers/themes';
import { Themes } from 'app/providers/themes/types/types';
import styles from './ThemeSwitchButton.module.scss';

export const ThemeSwitchButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <IconButton className={styles.button}  onClick={toggleTheme}>
            {theme === Themes.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
        </IconButton>
    )
}
