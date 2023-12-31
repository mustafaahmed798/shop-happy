import React from "react";
import Slider from "../../component/Home/Slider";
import HomeCategory from "../../component/Home/HomeCtegory";
import CardProductsContainer from "../../component/Product/CardProductsContainer";
import DiscountSection from "../../component/Home/DiscountSection";
import BrandFeatured from "../../component/Brand/BrandFeatured";

const Home = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الأكثر مبيعاً" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title="الأكثر تقيماً" btntitle="المزيد" />
      <BrandFeatured title="أشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default Home;
