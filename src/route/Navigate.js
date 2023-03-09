import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DogList } from "../components/DogList";
import { ListItem } from "../components/ListItem";

export const Navigate = () => {
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
