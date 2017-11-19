export function fbToEntities(values) {
    return Object.entries(values).map(([uid, value]) => ({
        ...value,
        uid
    }));
}