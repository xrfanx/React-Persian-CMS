import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Sidebar />

      <div className="flex-4 mr-56 p-4 max-sm:w-full max-sm:ml-0 max-sm:mr-0 max-sm:p-0">
        <Header />

        {router}
      </div>
    </>
  );
}
