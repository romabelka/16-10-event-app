import Auth from './auth'
import Navigation from './navigation'
import People from './people'
import Events from './events'

const stores = {}

stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)
stores.people = new People(stores)
stores.events = new Events(stores)

export default stores