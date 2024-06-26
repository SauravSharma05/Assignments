import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path='/' element={<Mainpage />}></Route>     
      <Route path='/addnew' element={<Addnew />}></Route>
      <Route path='/viewuser/:id' element={<Viewuser/>}></Route>
      <Route path='/Edituser/:id' element={<Edituser/>}></Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
