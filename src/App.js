import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AdminUser from "./pages/admin/adminUser";
import Chart from './component/admin/DashboardComponents/chart';
import Dashboard from './pages/admin/adminDashboard';
import Product from './pages/admin/adminProduct';
import CartManager from './component/admin/DashboardComponents/cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminUser />} />
          {/* chart */}
          <Route path="/adminDasboard" element={<Dashboard />} />
          {/* product */}
          <Route path="/adminProduct" element={<Product />} />
          {/* order */}
          <Route path="/managerCart" element={<CartManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;