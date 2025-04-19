import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/Shared";
import { Agents, Consultant, Executor } from "./Pages";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

// ... (same placeholder pages)

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Home Dashboard</h1>
  </div>
);
const Orders = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Orders</h1>
  </div>
);
const Products = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Products</h1>
  </div>
);
const Leads = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Leads</h1>
  </div>
);
const LandingPages = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Landing Pages</h1>
  </div>
);
const Analytics = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Analytics</h1>
  </div>
);
const Media = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Media</h1>
  </div>
);
const SalesBoosters = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Sales Boosters</h1>
  </div>
);

const Apps = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Apps</h1>
  </div>
);
const Settings = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Settings</h1>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="leads" element={<Leads />} />
          <Route path="landing-pages" element={<LandingPages />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="media" element={<Media />} />
          <Route path="sales-boosters" element={<SalesBoosters />} />
          <Route path="agents" element={<Agents />} />
          <Route path="executer" element={<Executor />} />
          <Route path="consultant" element={<Consultant />} />
          <Route path="apps" element={<Apps />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="p-8">
              <h1 className="text-2xl">Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
