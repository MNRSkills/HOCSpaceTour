import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/home";
import Crew from "./Components/crew";


function App() {
  return (
    <div className="App-wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/crew" element={<Crew />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
