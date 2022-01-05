import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header";
import AddNewPhone from "./Pages/AddNewPhone";
import AllPhones from "./Pages/AllPhones";
import FavoritePhones from "./Pages/FavoritePhones";



function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<AllPhones />}></Route>
        <Route path="/favorites" element={<FavoritePhones />}></Route>
        <Route path="/add-new-phone" element={<AddNewPhone />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
