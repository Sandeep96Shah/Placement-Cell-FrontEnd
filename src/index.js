import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { configureStore } from './store/index';
import { Provider } from 'react-redux';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

