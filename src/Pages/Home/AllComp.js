import React from "react";
import useProducts from "../../Hooks/useProduct";
import Product from "../../Shared/Product/Product";
import AboutCompany from "./AboutCompany";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ProductCatagory from "./ProductCatagory";
import ProuctRow from "./ProuctRow";
import Review from "./Review";
import ReviewRow from "./ReviewRow";

const AllComp = () => {
  const [products, setProducts] = useProducts([])
  const product = products.slice(1, 4 )
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <div className="flex flex-cols justify-center justify-evenly">


      {
                product.map(product => <Product 
                    product = {product} 
                    key = {product._id}
                    ></Product> )
      } 
      {/* <ProuctRow></ProuctRow> */}
            

      </div>
      <ReviewRow></ReviewRow>
      <AboutCompany></AboutCompany>
    </div>
  );
};

export default AllComp;
