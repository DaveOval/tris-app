import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import { Home } from "./pages/Home/index.tsx"
import Status from './pages/status/index.tsx';
import Tris from './pages/tris/index.tsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/status' element={ <Status /> } />
          <Route path='/tris-config' element={ <Tris /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
