import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Settings from './Pages/Settings';
import Questions from './Pages/Questions';
import Score from './Pages/Score';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings/>}/>
        <Route path="/quest" element={<Questions/>}/>
        <Route path="/score" element={<Score/>}/>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
