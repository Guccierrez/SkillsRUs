import React from "react";
import SkillList from "../components/SkillList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = (props) => {
  return (

    <div className="container">
      <CategoryMenu />
      <SkillList {...props}/>
      <Cart />
  
    </div>



  );
};

export default Home;
