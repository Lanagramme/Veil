import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ============== Pages
import Dortoire from './pages/Dortoire.js'
import Home from './pages/Home.js'
import Accademy from './pages/Accademy.js'
import Covens from './pages/Covens.js'
import Grimmoire from './pages/Grimmoire.js'
import Board from './pages/Board.js'
// import TeamSelect from './pages/TeamSelect.js'
// import TeamCreate from './pages/TeamCreate.js'

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path='/'  element={<Home   />} />
                <Route path='/Accademy'  element={<Accademy  />} />
                <Route path='/Dortoire'  element={<Dortoire  />} />
                <Route path='/Board'  element={<Board  />} />
                <Route path='/Covens'    element={<Covens    />} />
                <Route path='/Grimmoire' element={<Grimmoire />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
