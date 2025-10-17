import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";

function App() {
  const location = useLocation();

  // Define routes that should not show layout
  const hideLayout = ["/", "/login", "/register"].includes(location.pathname);
  return (
    <>
      {hideLayout ? (
        // No layout (e.g. for landing/login/register pages)
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="w-full">
            <Navbar username="SeifEhab" />
            <div className="custom-container">
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
