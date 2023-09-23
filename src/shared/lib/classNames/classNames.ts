type OptionalClassName = Record<string, boolean>

export const classNames = (...classes: (string | OptionalClassName | undefined)[]) => {
    const stringClasses = classes.filter(c => typeof c === "string") as string[];
    const objectsClasses = classes.filter(c => c && typeof c === "object") as OptionalClassName[];
    const objectClasses = objectsClasses.reduce((obj, c) => {
        return {...obj as OptionalClassName, ...c as OptionalClassName}
    }, {});
    const optionalClasses = Object.entries(objectClasses).filter(([k, v]) => v).map(([k, v]) => k);

    return [...stringClasses, ...optionalClasses].join(" ");
}
