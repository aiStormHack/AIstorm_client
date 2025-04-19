import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiShoppingCart,
  FiPackage,
  FiUsers,
  FiFileText,
  FiBarChart2,
  FiImage,
  FiZap,
  FiUserCheck,
  FiGrid,
  FiSettings,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

const SideBar = () => {
  const [pinnedAppsOpen, setPinnedAppsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: <FiHome size={20} />, name: "Home", path: "/dashboard/home" },
    {
      icon: <FiShoppingCart size={20} />,
      name: "Orders",
      path: "/dashboard/orders",
      badge: 17,
    },
    {
      icon: <FiPackage size={20} />,
      name: "Products",
      path: "/dashboard/products",
    },
    {
      icon: <FiUsers size={20} />,
      name: "Leads",
      path: "/dashboard/leads",
    },
    {
      icon: <FiFileText size={20} />,
      name: "Landing Pages",
      path: "/dashboard/landing-pages",
    },
    {
      icon: <FiBarChart2 size={20} />,
      name: "Analytics",
      path: "/dashboard/analytics",
    },
    {
      icon: <FiImage size={20} />,
      name: "Media",
      path: "/dashboard/media",
    },
    {
      icon: <FiZap size={20} />,
      name: "Sales Boosters",
      path: "/dashboard/sales-boosters",
    },
    {
      icon: <FiUserCheck size={20} />,
      name: "Agents",
      path: "/dashboard/agents",
    },
    { icon: <FiGrid size={20} />, name: "Apps", path: "/dashboard/apps" },
  ];

  const pinnedApps = [
    {
      icon: "/imgs/sheet.svg",
      name: "Google Sheet",
    },
    {
      icon: "/imgs/abandoned_cart.svg",
      name: "Abandoned Cart",
    },
  ];

  // Check if the current path matches menu item path
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <aside className="h-screen py-7 px-5 w-64 border-r-[1px] border-[#E2E8F0] flex flex-col justify-between shadow-sm">
      <div className="flex flex-col gap-5">
        {/* Main Navigation */}
        <nav className="border-b border-[#E2E8F0] pb-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item, index) => {
              const active = isActive(item.path);
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center rounded-md gap-3 px-4 py-2.5 transition-colors ${
                      active
                        ? "text-[#7269F8] font-medium bg-[#F1F0FE]"
                        : "text-[#64748B] hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={active ? "text-[#7269F8]" : "text-[#64748B]"}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-[#F1F0FE] text-[#7269F8] text-xs px-2 py-0.5 rounded-full font-medium">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Pinned Apps Section */}
        <div className="px-1">
          <button
            className="flex items-center text-[#64748B] text-sm font-medium mb-2 w-full px-3 py-1 rounded hover:bg-gray-50 transition-colors"
            onClick={() => setPinnedAppsOpen(!pinnedAppsOpen)}
          >
            <span>Pinned Apps</span>
            <span className="ml-auto">
              {pinnedAppsOpen ? (
                <FiChevronUp size={16} />
              ) : (
                <FiChevronDown size={16} />
              )}
            </span>
          </button>

          {pinnedAppsOpen && (
            <ul className="space-y-1 mt-2">
              {pinnedApps.map((app, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 gap-3 text-sm text-[#64748B] hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-6 object-contain"
                  />
                  <span className="font-medium">{app.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Settings at bottom */}
      <div className="pb-24 pt-4  border-t-[1px] border-[#E2E8F0]">
        <Link
          to="/settings"
          className="flex items-center px-4 py-2.5 gap-3 text-sm text-[#64748B] hover:bg-gray-50 rounded-md transition-colors"
        >
          <FiSettings size={20} className="text-[#64748B]" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
