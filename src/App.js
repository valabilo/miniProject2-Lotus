
import './App.css';

import { Routes, Route } from 'react-router-dom';
import RootLayouts from './shared/components/RootLayouts';
import {Home} from './Pages/Home';
import {Products} from './Pages/Products';
import {Promotions} from './Pages/Promotions';
import {Services} from './Pages/Services';
import {MyAccount} from './Pages/MyAccount';
import {CreateAccount} from './Pages/CreateAccount';
import { Profile } from "./Pages/profile";

function App() {
  return (
    <RootLayouts className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/promotions" element={<Promotions />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/myaccount" element={<MyAccount />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </RootLayouts>
  );
}

export default App;






