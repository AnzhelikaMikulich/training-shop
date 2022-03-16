import { createStore } from 'redux'
import card from './reducers/card'


let store = createStore(card, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/decremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}

window.store= store;
export default store