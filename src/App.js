import Homepage from '../src/pages/Homepage/Homepage';
import Header from '../src/components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
