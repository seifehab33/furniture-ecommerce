import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardSkeleton from "@/components/skeleton/DashboardSkeleton";
import NotFound from "@/pages/NotFound";

// Lazy imports
const Dashboard = lazy(() => import("@/pages/Dashboard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<DashboardSkeleton />}>
            <Dashboard />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
