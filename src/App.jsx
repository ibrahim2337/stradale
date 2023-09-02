import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import "./App.CSS";
import Offer from "./components/Offer/Offer";
import Specials from "./components/Specials/Specials";
import Footer from "./components/Footer/Footer";
import Listitem from "./components/ListItems1/Listitem";
import Blogs from "./components/Blogs/Blogs";
import Banner from "./components/Banner/Banner";


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <Welcome />
      <Offer />
      <Specials />
      <Listitem />
      <Blogs />
      <Footer />
      
    </div>
  );
}

export default App;
