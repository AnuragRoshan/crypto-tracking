import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Routes } from 'react-router-dom';
import Coinpage from './Pages/Coinpage';

function App() {
  return (
    <BrowserRouter>

      <Header/>
      <div>
        <Routes>

          < Route exact path="/" element={<Home />} />
          < Route exact path="/coin/:id" element={<Coinpage/>} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
