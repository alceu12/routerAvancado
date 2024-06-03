import logo from './logo.svg';
import './App.css';
import Home from './Componentes/Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pagina from './Componentes/Pages/Pagina';
import RootLayout from './Componentes/Pages/RootLayout';

function App() {

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: 'produtos', element: <Pagina /> },
        { path: '/', element: <Home /> }

      ]
    },
  ]);

  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;
