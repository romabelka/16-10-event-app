export default class BaseStore {
    constructor(stores) {
        this.stores = stores
    }

    getStore(name) {
        return this.stores[name]
    }
}