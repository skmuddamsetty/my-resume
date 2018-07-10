import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { addHeaderInformation, addEducation } from './actions/resume';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
store.dispatch(addHeaderInformation({
  headerInformation:{
    fullName: 'Santhosh Kumar Muddamsetty',
    position: 'Full Stack Developer',
    intro: 'random textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom textrandom text'
  } 
}));
console.log(store.getState());
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
