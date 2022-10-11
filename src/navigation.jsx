import Home from './pages/Home'
import Root from './pages/Root'
import Gallery from './pages/Gallery'
import FaqPage from './pages/FaqPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/frequently-asked-questions',
        element: <FaqPage />,
      },
    ],
  },
])
