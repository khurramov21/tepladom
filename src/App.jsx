import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import AcsiyaTovar from "./pages/AcsiyaTovar";
import New from "./pages/New";
import Dastavka from "./pages/Dastavka";
import Vozvrat from "./pages/Vozvrat";
import Contact from "./pages/Contact";
import RootLayout from "./pages/RootLayout";
import Menu from "./pages/Menu/Menu";
import Allcard from "./pages/AllCard";
import PopulyarCard from "./pages/Menu/PopulyarCard";
import AllCategory from "./pages/AllCategory";
import AllpopulyarCard from "./pages/AllpopulyarCard";
import Details from "./pages/Details";
import SelectCategory from "./pages/SelectCategory";
import Skeleton from "react-loading-skeleton";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Menu />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profil" element={<Profil />} />
          <Route path="login" element={<Login />} />
          <Route path="acsiya" element={<AcsiyaTovar />} />
          <Route path="new" element={<New />} />
          <Route path="dastavka" element={<Dastavka />} />
          <Route path="vozvrat" element={<Vozvrat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allcetory" element={<AllCategory />} />
          <Route path="allcard" element={<Allcard />} />
          <Route path="PopulyarCard" element={<PopulyarCard />} />
          <Route
            path="allPopulyarCard"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <AllpopulyarCard />
              </Suspense>
            }
          />
          <Route path="details/:id" element={<Details />} />
          <Route
            path="/selectCategory/:categoryName"
            element={<SelectCategory />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
