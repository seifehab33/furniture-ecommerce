import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="mx-3">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
