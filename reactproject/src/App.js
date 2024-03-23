import logo from './logo.svg';
import './App.css';
import { Header } from './components/shared/header';
import { Welcomesec } from './components/shared/welcomesec';
import { Mainbody } from './pages/main/mainbody';
import { Detailcontainer } from './pages/details/detailscontianer';
import { Detailstopics } from './pages/details/detailstopics';
import { Detailscard } from './pages/details/detailscard';
import { Detailsmain } from './pages/details/detailsmain';
import { DetailsData } from './pages/details/detailsdata';

function App() {
  return (
 <>
 <Header/>
 <Welcomesec/>
<DetailsData/>
</>
  );
}

export default App;
