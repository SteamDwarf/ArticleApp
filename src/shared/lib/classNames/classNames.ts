type OptionalClassName = Record<string, boolean>;

export const classNames = (...classes: Array<string | OptionalClassName | undefined>) => {
	const stringClasses = classes.filter((c) => typeof c === 'string') as string[];
	const objectsClasses = classes.filter((c) => c && typeof c === 'object') as OptionalClassName[];
	const objectClasses = objectsClasses.reduce((obj, c) => {
		return { ...obj, ...c };
	}, {});
	const optionalClasses = Object.entries(objectClasses).filter(([k, v]) => v).map(([k, v]) => k);

	return [...stringClasses, ...optionalClasses].join(' ');
};
