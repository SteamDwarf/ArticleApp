import { classNames } from 'shared/lib/classNames';
import { Header } from 'widgets/Header/Header';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/themes';
import './styles/style.scss';
import styles from './App.module.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', theme)}>
			<Header />
			{/* <AppRouting /> */}
			<div className={styles.main}>
				<Sidebar />
				<div />
			</div>
		</div>

	);
};

export default App;
