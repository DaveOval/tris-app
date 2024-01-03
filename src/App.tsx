import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import { Home } from "./pages/home/index.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
