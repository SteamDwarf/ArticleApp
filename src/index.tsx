/* eslint-disable comma-dangle */
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/themes';
import { SidebarProvider } from 'app/providers/sidebar';
import 'shared/configs/i18n/config';
import { ErrorHandler } from 'app/providers/errorHandler/ErrorHandler';

const rootContainer = document.querySelector('#root') as Element;
const root = createRoot(rootContainer);

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<SidebarProvider>
				<ErrorHandler>
					<App />
				</ErrorHandler>
			</SidebarProvider>
		</ThemeProvider>
	</BrowserRouter>
);
