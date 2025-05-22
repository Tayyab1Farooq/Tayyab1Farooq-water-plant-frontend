import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/auth/AdminLogin";
import CustomerLogin from "./pages/auth/CustomerLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Customers from "./pages/admin/Customers";
import Orders from "./pages/admin/Orders";
import Payments from "./pages/admin/Payments";
import Notifications from "./pages/admin/Notifications";
import Reports from "./pages/admin/Reports";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import PlaceOrder from "./pages/customer/PlaceOrder";
import OrderHistory from "./pages/customer/OrderHistory";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <ProtectedRoute role="admin">
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute role="admin">
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/payments"
          element={
            <ProtectedRoute role="admin">
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notifications"
          element={
            <ProtectedRoute role="admin">
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute role="admin">
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Customer Routes */}
        <Route
          path="/customer/dashboard"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer/place-order"
          element={
            <ProtectedRoute role="customer">
              <PlaceOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer/order-history"
          element={
            <ProtectedRoute role="customer">
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
