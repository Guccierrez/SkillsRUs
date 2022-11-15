import React from "react";
import SkillList from "../components/SkillList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = (props) => {
  return (
    <div style={{ 
      // backgroundRepeat: "no-repeat",
      backgroundColor: "grey"
    }} width="100%" height="100%">
    <div className="container" >
      <CategoryMenu />
      <SkillList {...props}/>
      <Cart />
    
    </div>
    </div>
 



  );
};

export default Home;
