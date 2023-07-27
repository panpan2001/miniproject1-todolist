import './App.css';
import ContainerRoute from './Routes/ContainerRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ContainerRoute/>
      <ToastContainer/>
    </div>
  );
}

export default App;
