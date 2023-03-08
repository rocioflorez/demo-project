import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DogList } from './components/DogList';
import { ListItem } from './components/ListItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogList />} />
          <Route path="/:name" element={<ListItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
