import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Reservations from "./pages/Reservations";
import MyReservation from "./pages/MyReservation";
import Favourites from "./pages/Favourites";
import Myhome from "./pages/Myhome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:id" element={<MyReservation />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/myhome" element={<Myhome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
