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
store.dispatch(
  addHeaderInformation({
    headerInformation: {
      fullName: 'Santhosh Kumar Muddamsetty',
      position: 'Full Stack Developer',
      intro:
        'Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery. ',
      summary: [
        "Created new REST web service operations and modified the existing web service's WADLs Web Application Description Language",
        "Used Junit for unit testing the web service opearations' code."
      ],
      node_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions',
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      angular_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic'
      ],
      react_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      redux_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      html5_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      sass_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      gulp_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      spring_boot_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      hibernate_summary: [
        'Integration of user-facing elements developed by front-end developers with server side logic',
        'Writing reusable, testable, and efficient code',
        'Design and implementation of low-latency, high-availability, and performant applications',
        'Implementation of security and data protection',
        'Integration of data storage solutions'
      ],
      expertin: [
        {
          imageUrl: 'images/npm.svg',
          imageText: 'Node JS'
        },
        {
          imageUrl: 'images/react.svg',
          imageText: 'React JS'
        }
      ],
      projects: [
        {
          title: 'First App',
          description:
            'Two exquisite objection delighted deficient yet its contained. Cordial because are account',
          environment: [
            {
              imageUrl: 'images/npm.svg',
              imageText: 'Node JS'
            },
            {
              imageUrl: 'images/react.svg',
              imageText: 'React JS'
            }
          ],
          githubUrl: '',
          liveUrl: ''
        },
        {
          title: 'Second App',
          description:
            'Two exquisite objection delighted deficient yet its contained. Cordial because are account',
          environment: [
            {
              imageUrl: 'images/npm.svg',
              imageText: 'Node JS'
            },
            {
              imageUrl: 'images/react.svg',
              imageText: 'React JS'
            }
          ],
          githubUrl: '',
          liveUrl: ''
        }
      ]
    }
  })
);
console.log(store.getState());
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
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
