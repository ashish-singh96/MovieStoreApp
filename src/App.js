import AddMovie from "./component/AddMovie";
import Card from "./component/Card";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="/" element={<Card/>}></Route>
         <Route path="/addmovie" element={<AddMovie/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
