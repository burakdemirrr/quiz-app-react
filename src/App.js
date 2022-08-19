import './App.css';
import React, { Suspense } from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LazyScore=React.lazy(()=>import('./Pages/Score'));
const LazyQuestions=React.lazy(()=> import("./Pages/Questions"))
const LazySettings=React.lazy(()=>import("./Pages/Settings"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback="..."><LazySettings/></Suspense>}/>
        <Route path="/quest" element={ <Suspense fallback="..."><LazyQuestions/></Suspense>}/>
        <Route path="/score" element={<Suspense fallback="..."><LazyScore/></Suspense>}/>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
