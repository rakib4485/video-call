import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Room from './Room/Room';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/room/:roomId',
      element: <Room/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
