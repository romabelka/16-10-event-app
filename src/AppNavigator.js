import {StackNavigator} from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventListScreen from './screens/EventList'

const AppNavigator = new StackNavigator({
    auth: {
        screen: AuthScreen
    },
    eventList: {
        screen: EventListScreen
    }
})

export default AppNavigator