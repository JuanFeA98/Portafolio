import { Routes, Route } from 'react-router-dom';

import './styles/index.css'

import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home'
import Prueba from './components/TestComponent/Prueba'

function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </Layout>
  );
}

export default App;