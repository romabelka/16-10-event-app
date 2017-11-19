import Auth from './auth'
import Navigation from './navigation'
import Events from './events'

const stores = {}

stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)
stores.events = new Events(stores)

export default stores