import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <AboutMe />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
            path: '/contact',
            element: <ContactMe />,
          },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );