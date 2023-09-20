export type OptionalClassName = Record<string, boolean>

export const classNames = (classes: string, optionalClasses: OptionalClassName) => {
    const opCls = Object.entries(optionalClasses)
                .filter(([key, value]) => value)
                .map(([key, value]) => key)
                .join(" ");

    return `${classes} ${opCls}`;
}