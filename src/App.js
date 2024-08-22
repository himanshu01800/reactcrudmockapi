import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Data from './Data';

function App() {
  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path="/data" element={<Data/>}/>
   </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
