// src/Components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "@/store/authStore";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const access_token = useAuthStore((state) => state.access_token);

  if (!access_token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
