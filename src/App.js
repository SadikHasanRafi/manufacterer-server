import "./App.css";
import Banner from "./Pages/Home/Banner";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import Review from "./Pages/Home/Review";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className=" px-8">
      <Header></Header>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
