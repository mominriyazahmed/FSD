import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
