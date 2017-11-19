export function fbToEntities(values, DataRecord) {
    return Object.entries(values)
        .map(
            ([uid, value]) => ({ uid, ...value }),
        )
}