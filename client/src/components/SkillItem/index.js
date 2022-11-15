import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import { Button, Card, CardDescription, Icon } from "semantic-ui-react";
// import { REMOVE_SKILL } from "../utils/mutations";
// import { useMutation } from '@apollo/client';


function SkillItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    CardDescription,
    quantity,
  } = item;

  const { cart } = state;
  // const [removeSkill, { err }] = useMutation(REMOVE_SKILL);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        skill: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }

    // const removeSkillButton = async (e) => {
    //   //fire off mutation hook here
    //   try {
    //     serviceInfo.price = parseInt(serviceInfo.price)
    //     const { data } = await removeSkill({
    //       variables: { ...serviceInfo },
    //     });
    //   } catch (err) {
    //     console.error(err);
    //   }
      
  
    // }
  };

  return (
    <div>
      <Card style={{ width: "24rem", margin: "2rem", height: "350px" }}>
        <Link to={`/skills/${_id}`}>
          <img alt={name} src={`/images/${image}`} />
        </Link>
        <Card.Content>
          <Card.Header>
            {CardDescription}
            <p>{name}</p>
          </Card.Header>
          <Card.Meta>
            <span>${price}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={addToCart} inverted color="inverted red">
            {/* <Icon name="in cart"/> */}
            Add to cart
            {/* <Icon/> */}
          </Button>
          {/* <Button inverted color="green" icon onClick={() => {
        removeSkillButton()
      }}>
        <Icon name="dollar" />
        Add it!
        <Icon name="dollar" />
      </Button> */}
        </Card.Content>

      </Card>
    </div>
  );
}

export default SkillItem;
