import React from "react";
import SkillList from "../components/SkillList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = () => {
  return (

    <div className="container">
      <CategoryMenu />
      <SkillList />
      <Cart />
  
    </div>



  );
};

export default Home;
