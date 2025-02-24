import React from "react";
import Layout from "../../component/Layout/layout";
import HeroSection from "../../component/heroSection/HeroSection";
import BlogPostCard from "../../component/blogPostCard/BlogPostCard";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    </Layout>
  );
};

export default Home;
