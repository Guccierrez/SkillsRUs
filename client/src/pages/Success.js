// import React, { useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import Jumbotron from '../components/Jumbotron';

// import { idbPromise } from '../utils/helpers';

// function Success() {
  

//   useEffect(() => {
//     async function saveOrder() {
//       const cart = await idbPromise('cart', 'get');
//       const skills = cart.map((item) => item._id);

//       if (skills.length) {
//         const { data } = await addOrder({ variables: { skills } });
//         const skillData = data.addOrder.skills;

//         skillData.forEach((item) => {
//           idbPromise('cart', 'delete', item);
//         });
//       }

//       setTimeout(() => {
//         window.location.assign('/');
//       }, 3000);
//     }

//     saveOrder();
//   }, [addOrder]);

//   return (
//     <div>
//       <Jumbotron>
//         <h1>Success!</h1>
//         <h2>Thank you for your purchase!</h2>
//         <h2>You will now be redirected to the home page</h2>
//       </Jumbotron>
//     </div>
//   );
// }

// export default Success;
