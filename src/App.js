import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.css'

import Home from './pages/Home/Home'
import Header from './components/TestComponent/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "prueba",
    element: <Header/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
