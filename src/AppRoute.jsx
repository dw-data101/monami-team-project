import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./Home/Intro";
import Product from "./Home/Product";
import Support from "./Home/Support";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="in" element={<Intro />} />
          <Route path="pr" element={<Product />} />
          <Route path="su" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
