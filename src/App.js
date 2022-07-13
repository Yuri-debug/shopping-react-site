import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import SaleBin from "./pages/SaleBin/SaleBin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salebin" element={<SaleBin />} />
      </Routes>
    </Router>
  );
}

export default App;
