import Auth from './auth'
import Events from './events'
import Navigation from './navigation'

const stores = {}

stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)
stores.events = new Events(stores)

export default stores