import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SaleBin } from "./pages";

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
