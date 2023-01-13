import {  createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./containers/Layout/Layout";

import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import Blog from "./pages/Blog/Blog";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/proyectos", element:<Proyectos/> },
  { path: "/blog", element:<Blog/> }

]);

function App() {
  return (
   <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
