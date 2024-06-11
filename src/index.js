import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home';
import Users from './screens/Users';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Todo from './screens/Todo';
import PostScreen from './screens/Posts';
import CommentsScreen from './screens/Comments';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/user" element={<Users />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/post" element={<PostScreen />} />
      <Route path="/comment" element={<CommentsScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
