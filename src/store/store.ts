import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redusers/redusers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;