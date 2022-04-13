import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Routes } from 'react-router-dom';
import Coinpage from './Pages/Coinpage';
import { makeStyles } from '@material-ui/core'
import Pricing from './Pages/Pricing';
import Alert from './Components/Alert';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#c0ced1',
      color: '#071c34',
      minHeight: '100vh'
    },
  }))

  const classes = useStyles();

  return (
    <BrowserRouter>

      <div className={classes.App}>
        <Header />
        <Routes>

          < Route exact path="/" element={<Home />} />
          < Route exact path="/coin/:id" element={<Coinpage/>} />
          < Route exact path="/Pricing" element={<Pricing/>} />

        </Routes>

      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
