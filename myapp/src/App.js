import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import We from "./components/We";
import States from "./components/States";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <We />
      <States />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
