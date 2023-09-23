import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/themes';
import { Header } from 'widgets/Header/Header';
import './styles/style.scss';
import styles from './App.module.scss';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Header />
            {/* <AppRouting /> */}
            <div className={styles.main}>
                <Sidebar />
                <div>
                    
                </div>
            </div>
        </div>
            
    );
}

export default App;