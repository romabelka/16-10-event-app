import Auth from './auth'
import Navigation from './navigation'
import Events from './events'
import People from './people'

const stores = {}

stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)
stores.events = new Events(stores)
stores.people = new People(stores)

export default stores