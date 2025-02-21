const loggedDeprecations = new Set<string>();

export const logDeprecation = (oldComponent: string, newComponent: string): void => {
    if (!loggedDeprecations.has(oldComponent)) {
        loggedDeprecations.add(oldComponent);
        console.warn(`%c${oldComponent} is deprecated. Use ${newComponent} instead.`,
            'font-weight: bold');
    }
};