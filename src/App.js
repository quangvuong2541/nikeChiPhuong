import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProductPage from "./pages/DetailProduct/DetailProductPage";
import NavBar from "./component/NavBar/NavBar";
import CartPage from "./pages/Cart/CartPage";
import UserFavorite from "./pages/User/userFavorite";
import UserProfile from "./pages/User/userProfile";
import UserOrder from "./pages/User/userOrder";
import ListProductPage from "./pages/ListProduct/ListProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" caseSensitive={true} element={<Home />} />
            <Route path="/detailProduct/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user/favorite" element={<UserFavorite />} />
          </Route>
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/order" element={<UserOrder />} />
          <Route path="/listProduct" element={<ListProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
