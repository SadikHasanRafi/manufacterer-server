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
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder/ManageAllOrder";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyOrder from "./Pages/Dashboard/Myorder/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import FourZeroFour from "./Pages/FourZeroFour/FourZeroFour";
import Loading from "./Shared/Loading";
import Reviews from "./Pages/Home/Reviews";

function App() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="product" element={<ProuctRow/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="manageallorder" element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manageproduct" element={<ManageProduct></ManageProduct>}></Route>
        </Route>

        <Route path="product/:_id" element={<ShowProductDetails></ShowProductDetails>}></Route>
        <Route path="review" element={<Reviews/>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>  
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

