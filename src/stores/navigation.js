import BaseStore from './BaseStore'
import {observable, action, computed, toJS} from 'mobx'
import AppNavigator from '../AppNavigator'
import {NavigationActions} from 'react-navigation'

export default class NavigationStore extends BaseStore {
    @observable state = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('auth'))

    @action dispatch = (event) => {
        this.state = AppNavigator.router.getStateForAction(event, this.state)
    }

    @computed get config() {
        return {
            state: toJS(this.state),
            dispatch: this.dispatch
        }
    }

    navigate(routeName, params) {
        this.dispatch(NavigationActions.navigate({routeName, params}))
    }

    reset(routeName, params) {
        const action = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName, params })
            ]
        })

        this.dispatch(action)
    }
}
