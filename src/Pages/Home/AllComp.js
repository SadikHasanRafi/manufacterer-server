import React from "react";
import AboutCompany from "./AboutCompany";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ProductCatagory from "./ProductCatagory";
import ProuctRow from "./ProuctRow";
import Review from "./Review";

const AllComp = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <ProuctRow></ProuctRow>
      <Review></Review>
      <ProuctRow></ProuctRow>
      <AboutCompany></AboutCompany>
    </div>
  );
};

export default AllComp;
