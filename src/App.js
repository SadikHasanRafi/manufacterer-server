import "./App.css";
import Login from "./Pages/Account/Login";
import SignUp from "./Pages/Account/SignUp";
import AboutCompany from "./Pages/Home/AboutCompany";
import Banner from "./Pages/Home/Banner";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import ProductCatagory from "./Pages/Home/ProductCatagory";
import ProuctRow from "./Pages/Home/ProuctRow";
import Review from "./Pages/Home/Review";
import BuyNowModal from "./Pages/Products/BuyNowModal";
import ProductPage from "./Pages/Products/ProductPage";
import ShowProductDetails from "./Pages/Products/ShowProductDetails";
import Footer from "./Shared/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard"
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/AllComp"
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="product" element={<ProuctRow/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="review" element={<Review/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

