import { BrowserRouter} from "react-router-dom";
import './App.css';
import Allroutes from "./Allroutes";


const App = () => {

  
  return (
    <BrowserRouter>
      <Allroutes />
    </BrowserRouter>
  );
};

export default App;
