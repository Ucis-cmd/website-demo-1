import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./Feature";
import Team from "./Team";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
