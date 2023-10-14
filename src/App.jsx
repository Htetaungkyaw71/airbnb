import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Reservations from "./pages/Reservations";
import MyReservation from "./pages/MyReservation";
import Favourites from "./pages/Favourites";
import Myhome from "./pages/Myhome";
import CategoryPage from "./pages/CategoryPage";
import CreateProperties from "./pages/CreateProperties";
import { Protect } from "./services/Protect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/category/:category" element={<CategoryPage />} />

        {/* Need to Login  */}

        <Route
          path="/reservations"
          element={
            <Protect>
              <Reservations />
            </Protect>
          }
        />
        <Route
          path="/reservations/:id"
          element={
            <Protect>
              <MyReservation />
            </Protect>
          }
        />
        <Route
          path="/favourites"
          element={
            <Protect>
              <Favourites />
            </Protect>
          }
        />
        <Route
          path="/myhome"
          element={
            <Protect>
              <Myhome />
            </Protect>
          }
        />
        <Route
          path="/create_property"
          element={
            <Protect>
              <CreateProperties />
            </Protect>
          }
        />

        {/* Need to Login  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
