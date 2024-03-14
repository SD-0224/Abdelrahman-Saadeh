import logo from './logo.svg';
import './App.css';
import { Header } from './components/shared/header';
import { Welcomesec } from './components/shared/welcomesec';
import { Searchsec } from './pages/main/searchsec';

function App() {
  return (
 <>
 <Header/>
 <Welcomesec/>
 <Searchsec/>
 </>
  );
}

export default App;
