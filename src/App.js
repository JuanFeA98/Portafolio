import { Routes, Route } from 'react-router-dom';

import './styles/index.css'

import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </Layout>
  );
}

export default App;