import './App.css'
import PortofolioContainer from './PortofolioContainer/PortofolioContainer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <PortofolioContainer/>
    </div>
  );
}

export default App;
