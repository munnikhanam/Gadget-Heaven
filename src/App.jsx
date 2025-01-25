import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./layout/Root";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Dasboard from "./pages/Dasboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="dasboard" element={<Dasboard />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
