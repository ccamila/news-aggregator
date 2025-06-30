  // eslint-disable-next-line
export const OmitEmpty = (obj: Record<string, any>) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value !== null && value !== undefined && value !== '')
    );
};