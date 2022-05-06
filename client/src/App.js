import './App.css';
import { useState } from 'react';
import Index from './pages/Index/Index';
import Status from './pages/Status/Status';


function App() {

  const [page, setPage] = useState(0);

  const getCurrentPage = () => {
    switch (page) {
      case 0:
        return <Index />;
        break;
      case 1:
        return <Status />;
        break;
      default:
        break;
    }
  }

  return (
    
    <div className='App'>
      <button className='debug-button' onClick={()=>setPage((page==0)?1:0)}>Cambia pagina</button>
      {getCurrentPage()}
    </div>
  )
}

export default App;
