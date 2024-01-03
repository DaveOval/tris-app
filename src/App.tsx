import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import { Home } from "./pages/Home/index.tsx"

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
