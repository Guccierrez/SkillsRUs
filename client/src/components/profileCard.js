// import React from "react";
// import { Link } from "react-router-dom";

// import SkillItem from "./SkillItem";


// import {  Card  } from "semantic-ui-react";

// function profileCard(item) {
 

//   const {
//     image,
//     name,
//     _id,
//     price,
//     CardDescription,
    
//   } = item;

  


//   return (
//     <div>
//       <Card style={{ width: "24rem", margin: "2rem", height: "350px" }}>
//         <Link to={`/skills/${_id}`}>
//           <img alt={name} src={`/images/${image}`} />
//         </Link>
//         <Card.Content>
//           <Card.Header>
//             {CardDescription}
//             <p>{name}</p>
//           </Card.Header>
//           <Card.Meta>
//             <span>${price}</span>
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content extra>
//         </Card.Content>
//       </Card>
//     </div>
//   );
// }

// export default profileCard;