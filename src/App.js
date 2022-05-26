import "./App.css";
import Login from "./Pages/Account/Login";
import AboutCompany from "./Pages/Home/AboutCompany";
import Banner from "./Pages/Home/Banner";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import ProductCatagory from "./Pages/Home/ProductCatagory";
import ProuctRow from "./Pages/Home/ProuctRow";
import Review from "./Pages/Home/Review";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className=" px-8">
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;



// home page
{/* <Header></Header>
<Banner></Banner>
<ProductCatagory></ProductCatagory>
<BusinessSummary></BusinessSummary>
<Review></Review>
<ProuctRow></ProuctRow>
<AboutCompany></AboutCompany>
<Footer></Footer> */}