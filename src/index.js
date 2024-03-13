import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SiteContainer from './components/SiteContainer/SiteContainer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import CreatePost from './pages/CreatePost';
import CategoryPosts from './pages/CategoryPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import ErrorPage from './pages/ErrorPage';
import Apps from './pages/Apps';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteContainer />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "login", element: <Login />},
      {path: "profile", element: <UserProfile />},
      {path: "create", element: <CreatePost />},
      {path: "posts/categories/:categories", element: <CategoryPosts />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "apps", element: <Apps />},
      {path: "logout", element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);