import "./App.css";
import Login from "./Pages/Account/Login";
import SignUp from "./Pages/Account/SignUp";
import AboutCompany from "./Pages/Home/AboutCompany";
import Banner from "./Pages/Home/Banner";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import ProductCatagory from "./Pages/Home/ProductCatagory";
import ProuctRow from "./Pages/Home/ProuctRow";
import Review from "./Pages/Home/Review";
import ProductPage from "./Pages/Products/ProductPage";
import ShowProductDetails from "./Pages/Products/ShowProductDetails";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className=" px-8">
      <Header></Header>
      <ShowProductDetails></ShowProductDetails>
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