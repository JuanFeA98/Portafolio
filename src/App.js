import {  createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/proyectos", element:<Proyectos/> }
]);

function App() {
  return (
   <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
