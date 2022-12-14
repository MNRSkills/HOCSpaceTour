import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/pages/home";
import Crew from "./Components/pages/crew";
import Destinations from "./Components/pages/destinations";
import Tech from "./Components/pages/technology";

function App() {
  return (
    <div className="App-wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/technology" element={<Tech />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
