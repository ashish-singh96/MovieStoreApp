import Header from "./component/Header";
import Cards from "./component/Card";
import AddMovie from './component/AddMovie'
import {Route, Routes} from 'react-router-dom'
import { createContext, useEffect, useState } from "react";
// import Login from './components/Login'
// import Signup from './components/Signup'

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
    
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
