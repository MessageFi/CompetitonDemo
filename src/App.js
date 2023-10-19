import './App.css';
import Banner from './component/Home';
import { Route , Routes } from 'react-router-dom';
import Competions from './component/Competions';
import Create from './component/Create';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/competitions' element={<Competions/>}></Route>
        <Route path='/' element={<Banner />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
