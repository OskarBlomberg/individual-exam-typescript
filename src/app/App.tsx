import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

type Router = ReturnType<typeof createBrowserRouter>;

function App() {
  const router: Router = createBrowserRouter(AppRoutes);
  return <RouterProvider router={router} />;
}

export default App;
