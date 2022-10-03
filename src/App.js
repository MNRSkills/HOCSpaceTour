import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/home";
import Crew from "./Components/crew";
import Destinations from "./Components/destinations";

function App() {
  return (
    <div className="App-wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
