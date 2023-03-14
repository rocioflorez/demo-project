import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DogList } from './components/DogList';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogList />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
