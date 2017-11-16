import Auth from './auth'
import Navigation from './navigation'

const stores = {}

stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)

export default stores