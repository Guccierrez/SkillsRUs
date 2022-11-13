import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Button} from "semantic-ui-react";
import { Card, Icon, Image,Grid} from 'semantic-ui-react'

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}


    //     <span>${price}</span>
    //   </div>
    //   <Button onClick={addToCart} inverted color="inverted red">Add to cart</Button>
    // </div>


<div>
    <Card style={{ width: '24rem',  margin:'2rem',height: '350px'}}>
      <Link to={`/products/${_id}`}>
    <img
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
    <Card.Content>
      <Card.Header> <p>{name}</p></Card.Header>
      <Card.Meta>
      <span>${price}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button onClick={addToCart} inverted color="inverted red">Add to cart</Button>
    </Card.Content>
  </Card>

</div>



  );
}

export default ProductItem;
