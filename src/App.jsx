import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllCategoires from "./components/AllCategories";
import AllProducts from "./components/AllProducts";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllCategoires />
      <AllProducts/>
    </div>
  );
}

export default App;
