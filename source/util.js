export const filterListener = (listeners, filterEventTypes) => {
    let result = { ...listeners }
    for (let type of filterEventTypes) {
        delete result[type]
    }
    return result
}
