import { classNames } from 'shared/lib/classNames';
import { Header } from 'widgets/Header/Header';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTheme } from './providers/themes';
import './styles/style.scss';
import styles from './App.module.scss';
import { AppRouting } from './AppRouting';

const App = () => {
	const { theme } = useTheme();
	// TODO убрать
	/* let a: any;
	a[0].hello; */
	return (
		<div className={classNames('app', theme)}>
			<Suspense>
				<Header />
				<div className={styles.main}>
					<Sidebar />
					<div className={styles.content}>
						<AppRouting />
					</div>
				</div>
			</Suspense>
		</div>

	);
};

export default App;
