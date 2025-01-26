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

import AllGedgets from "./components/AllGedgets";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          path="/"
          element={<Home />}
          loader={() => fetch("../category.json")}
        >
          <Route
            path="/category/:category"
            element={<AllGedgets />}
            loader={() => fetch("../gadget.json")}
          ></Route>
        </Route>
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
