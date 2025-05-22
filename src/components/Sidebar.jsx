import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to={role === "admin" ? "/admin/dashboard" : "/customer/dashboard"}>
            Overview
          </Link>
        </li>
        {role === "admin" && (
          <>
            <li>
              <Link to="/admin/customers">Customers</Link>
            </li>
            <li>
              <Link to="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin/payments">Payments</Link>
            </li>
            <li>
              <Link to="/admin/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/admin/reports">Reports</Link>
            </li>
          </>
        )}
        {role === "customer" && (
          <>
            <li>
              <Link to="/customer/place-order">Place Order</Link>
            </li>
            <li>
              <Link to="/customer/order-history">Order History</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
