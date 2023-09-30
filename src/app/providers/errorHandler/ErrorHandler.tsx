import {
	Component, ErrorInfo, ReactNode,
} from 'react';
import { PageError } from 'widgets/PageError/PageError';

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorHandler extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// You can also log the error to an error reporting service
		// eslint-disable-next-line no-console
		console.error(error, info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
		// You can render any custom fallback UI
			return <PageError />;
		}

		return children;
	}
}
