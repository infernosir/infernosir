import './App.css';
import Home from './Home';
import {Routes , Route} from "react-router-dom";
import Catgallery from './Catgallery';
import Doggallery from './Doggallery';
import Contactus from './Contact.js';

function App() {  
  return (<>

 <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cats" element={<Catgallery/>} />
          <Route path="/dogs" element={<Doggallery/>} />
          <Route path="/contactus" element={<Contactus/>}/>
</Routes>
    </>
  );
}
export default App;
