import { Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home/home';
import Historia from './components/History/historia';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/Historia'>Historia</Link> </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/Historia' element={<Historia/>} />
      </Routes>
    </div>
  );
}

export default App;
