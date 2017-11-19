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

    navigate(routeName) {
        this.dispatch(NavigationActions.navigate({routeName}))
    }
}
