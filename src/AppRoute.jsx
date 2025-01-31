import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./Home/Intro";
import Product from "./Home/Product";
import Support from "./Home/Support";
import CeoM from "./pageComponents/Introduction/CeoM";
import ComI from "./pageComponents/Introduction/ComI";
import ComY from "./pageComponents/Introduction/ComY";
import Ethic from "./pageComponents/Introduction/Ethic";
import Invest from "./pageComponents/Introduction/Invest";
import CI from "./pageComponents/Introduction/CI";
import Way from "./pageComponents/Introduction/Way";
import SafeT from "./pageComponents/Introduction/SafeT";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="in" element={<Intro />} />
          <Route path="pr" element={<Product />} />
          <Route path="su" element={<Support />} />
          <Route path="ceom" element={<CeoM />} />
          <Route path="comi" element={<ComI />} />
          <Route path="comy" element={<ComY />} />
          <Route path="ethic" element={<Ethic />} />
          <Route path="invest" element={<Invest />} />
          <Route path="ci" element={<CI />} />
          <Route path="way" element={<Way />} />
          <Route path="safet" element={<SafeT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
