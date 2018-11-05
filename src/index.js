import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(promise, thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
  
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
