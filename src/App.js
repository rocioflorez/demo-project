import './App.css';
import { Navigate } from './route/Navigate';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Navigate />
    </DataProvider>
  );
}

export default App;
