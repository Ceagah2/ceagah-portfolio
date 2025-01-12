
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Experience from './presentation/pages/Experiences/Experience'
import Home from './presentation/pages/Home/Home'
import Jobs from './presentation/pages/Jobs/Jobs'
import NotFound from './presentation/pages/NotFound/NotFound'
import Secret from './presentation/pages/Secret/Secret'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/jobs',
      element: <Jobs />
    },
    {
      path: '/experiences',
      element: <Experience />
    },
    {
      path: '/secret',
      element: <Secret />
    },
    {
      path:'*',
      element: <NotFound />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
